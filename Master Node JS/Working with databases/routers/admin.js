const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product', adminController.getEditProducts);
router.post('/edit-product', adminController.postEditProducts);

router.get('/product-not-found', adminController.getProductNotFound);

exports.router=router;