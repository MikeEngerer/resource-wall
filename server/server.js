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
	keys: ['test']
}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/login', (req, res) => {
	let { email, password } = req.body
	knex('Users')
		.returning('*')
		.where('email', email)
		.then(resp => {
			if (bcrypt.compare(password, resp.password)) {
				res.send({ loggedIn: true })
			} else {
				res.send({ loggedIn: false })
			}
		})

})
app.post('/register', (req, res) => {
	let { email, name, password } = req.body
	password = bcrypt.hash(password, 10, (err, hash) => {
		knex('Users')
			.insert({name, email, password: hash})
			.then()
	})

})

app.get('/server', (req, res) => {
  res.send({express: 'server connected to react' });
})
 
app.listen(8080, () => {
	console.log('app listening on 8080')
})