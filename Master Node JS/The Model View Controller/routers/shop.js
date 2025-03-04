const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getHome);

router.get('/shop/show-products-user', shopController.getShowProducts);

router.get('/shop/cart', shopController.getShowCart);

router.post('/shop/cart/add', shopController.postAddToCart);

router.get('/shop/checkout', shopController.getCheckout);

router.get('/shop/product-details/:productID', shopController.getProductDetails);

exports.router=router;