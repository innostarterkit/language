const express = require('express')
const apilanguage = require('./apilanguage')
const app = express()

const options = {
  explorer : true
};

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));

app.get('/language', function (req, res) {
  apilanguage.quickstart().then((result) => {
    res.send(result)
  }).catch((err) => {
    res.send('Hello World !')
  });
})

app.get('/', function (req, res) {
  res.send('Hello World ! 4')
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
