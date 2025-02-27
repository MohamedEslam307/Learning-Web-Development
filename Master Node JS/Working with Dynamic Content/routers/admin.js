const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const products = [];

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/show-products', (req, res, next) => {
    console.log('In get show-products middleware!');
    res.render('show-products', { prods: products, path: '/show-products' , pageTitle: 'Show Products' });
}
);

router.get('/add-product', (req, res, next) => {
    console.log('In get add-product middleware!');
    res.sendFile( path.join(__dirname,'../', 'views','add-product.html'));
}
);

router.post('/add-product', (req, res, next) => {
    console.log('In post add-product middleware!');

    products.push({ title: req.body.productname, price: req.body.productprice , description: req.body.productdescription , quantity: req.body.productquantity});
    console.log(products.at(-1));
    
    fs.appendFile('products.txt', 'Product name: '+req.body.productname, (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.appendFile('products.txt', ' ,Product price: '+req.body.productprice+'\n', (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.appendFile('products.txt', 'Product description: '+req.body.productdescription+'\n', (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.redirect('/');
}
);

exports.router=router; 
exports.products=products;

