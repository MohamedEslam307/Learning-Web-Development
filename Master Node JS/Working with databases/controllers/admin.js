const product = require('../models/product');

exports.getEditProducts = (req, res, next) => {
    console.log('In get edit-product middleware!');
    res.render('admin/edit-product',{
        pageTitle: 'Edit Product',
        path: 'admin/edit-product'
    });
    return res.end();
}

exports.postEditProducts = (req, res, next) => {
    console.log('In post edit-product middleware! '+req.body.productId);
    product.searchProduct(parseInt(req.body.productId), (foundProduct,isFound)=>{
        if(isFound){
            const tempProduct = new product(req.body);
            tempProduct.edit(foundProduct,(isDone)=>{
                if(isDone){
                    console.log('Product edited successfully');
                    res.redirect('/');
                }else{
                    console.log('Product not removed');
                }    
            }
            );
        }
        else{
            console.log('Product not found');
            res.redirect('/admin/product-not-found');
        }
    });
}

exports.getProductNotFound = (req, res, next) => {
    console.log('In get product-not-found middleware!');
    res.render('admin/product-not-found',{
        pageTitle: 'Product Not Found',
        path: 'admin/product-not-found'
    });
    return res.end();
}

exports.getAddProduct = (req, res, next) => {
    console.log('In get add-product middleware!');
    res.render('admin/add-product',{
        pageTitle: 'Add Product',
        path: 'admin/add-product'
    });
    return res.end();
}

exports.postAddProduct=(req, res, next) => {
    console.log('In post add-product middleware!');
    console.log(req.body);
    const tempProduct = new product(req.body);
    tempProduct.save(()=>{
        console.log('Product added successfully');
        res.redirect('/');
    }
    );    
}

