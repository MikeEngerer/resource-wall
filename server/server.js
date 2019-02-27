const express = require('express');
const app = express();
const knexConfig = require('./knexfile.js');
const ENV = process.env.ENV || "development";
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt')
const uuid = require('uuid/v4')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({
	name: 'session',
	keys: ['cookie']
}))

// sends cookie status msg to client for auth purposes
app.get('/cookie', (req, res) => {
	let result;
  req.session.id ? result = 'logged in' : result = 'logged out'
  res.send({ result });
})

// on login, if email in db check pass hash and set cookie, else send err
app.post('/login', (req, res) => {
	let { email, password } = req.body
	knex('Users')
	.returning('*')
	.where('email', email)
	.then(resp => {
		if (resp[0]) {
			bcrypt.compare(password, resp[0].password, (err, response) => {
				if (response) {
					req.session.id = uuid()
					res.send({result: 'success'})
				} else {
					res.send({result: 'invalid password'})
				}
			})
		} else {
			res.send({result: 'invalid email or password'})
		}
	})
})


app.post('/register', (req, res) => {
	let { email, name, password } = req.body
	knex('Users')
	.returning('*')
	.where('email', email)
	.then(resp => {
		if (resp[0]) {
			res.send({result: 'User already exists'})
		} else {
			password = bcrypt.hash(password, 10, (err, hash) => {
				knex('Users')
				.insert({name, email, password: hash})
				.then(() => {
          req.session.id = uuid()
          res.send({result: 'success'})
        })
			})
		}
	})

})

app.post('/logout', (req, res) => {
	req.session = null;
	res.send({result: 'Successfully logged out'})
})

 
app.listen(8080, () => {
	console.log('app listening on 8080')
})