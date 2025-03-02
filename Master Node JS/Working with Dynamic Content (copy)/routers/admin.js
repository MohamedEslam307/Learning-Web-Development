const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const products = require('../controllers/product');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', products.getAddProduct);
router.post('/add-product', products.postAddProduct);

exports.router=router;