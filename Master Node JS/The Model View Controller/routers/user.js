const express = require('express');

const router = express.Router();

const products = require('../controllers/product');
const home = require('../controllers/home');

router.get('/', home.getHome);
router.get('/show-products', products.getShowProducts);

exports.router=router;