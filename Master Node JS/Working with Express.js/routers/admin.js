const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/show-users', (req, res, next) => {
    res.sendFile( path.join(__dirname,'../', 'views','show-users.html'));
}
);

router.get('/add-user', (req, res, next) => {
    console.log('In add-user middleware!');
    res.sendFile( path.join(__dirname,'../', 'views','add-user.html'));
}
);

router.post('/add-user', (req, res, next) => {
    console.log('In user middleware!');
    console.log(req.body);

    fs.appendFile('username.txt', 'Username: '+req.body.username+'\n', (err) => {
        res.redirect('/');
    }
    );
}
);

module.exports=router; 
