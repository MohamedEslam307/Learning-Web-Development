const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', (req, res, next) => {
    console.log('In users middleware!');
    res.send('<h1>The "Users" Page</h1>');
}
);

app.use('/', (req, res, next) => {
    console.log('In base middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
