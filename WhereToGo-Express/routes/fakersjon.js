const express = require('express');
const router = express.Router();
var faker = require('faker');

router.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({
  	Users:
  	[
  		{
  			id: faker.random.number(),
			name: faker.name.findName() ,
			email: faker.internet.email(),
			password: faker.internet.password(),
  		},
  		{
  			id: faker.random.number(),
			name: faker.name.findName() ,
			email: faker.internet.email(),
			password: faker.internet.password(),
  		},
  		{
  			id: faker.random.number(),
			name: faker.name.findName() ,
			email: faker.internet.email(),
			password: faker.internet.password(),
  		}
  	]
  });
});

module.exports = router;