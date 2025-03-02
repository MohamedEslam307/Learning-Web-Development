const product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('In get add-product middleware!');
    res.render('add-product',{
        pageTitle: 'Add Product'
    });
    return res.end();
}

exports.postAddProduct=(req, res, next) => {
    console.log('In post add-product middleware!');
    const tempProduct = new product(req.body);
    tempProduct.save(()=>{
        console.log('Product added successfully');
        res.redirect('/');
    }
    );    
}

exports.getShowProducts = (req, res, next) => {
    console.log('In get show-products middleware!');
    const products = product.fetchAll((products)=>{
        res.render('show-products',{
            prods:products,
            path:'/show-products',
            pageTitle: 'Show Products'
        });
        return res.end();
    }
    );
}
