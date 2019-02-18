const express = require('express');
const app = express();
const knexConfig = require('./knexfile.js');
const ENV = process.env.ENV || "development";
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/register', (req, res) => {
	let { email, name } = req.body
	console.log(email, name)
	knex('Users')
		.insert({name, email})
		.then()

})

app.get('/server', (req, res) => {
  res.send({express: 'server connected to react' });
})
 
app.listen(8080, () => {
	console.log('app listening on 8080')
})