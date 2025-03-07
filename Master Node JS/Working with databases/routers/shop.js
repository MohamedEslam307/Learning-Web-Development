const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getHome);

router.get('/shop/show-products-user', shopController.getShowProducts);

router.get('/shop/cart', shopController.getShowCart);

router.get('/shop/cart/add-to-cart/:productID', shopController.getAddToCart);

router.get('/shop/checkout', shopController.getCheckout);

router.get('/shop/product-details/:productID', shopController.getProductDetails);

router.get('/shop/cart/delete-item/:productID', shopController.getProductdeleteItem);

router.get('/shop/cart/delete-product/:productID', shopController.getProductdelete);

exports.router=router;