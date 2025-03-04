const product = require('../models/product');

exports.getHome = (req, res, next) => {
    console.log('In get home middleware'); 
    res.render('shop/index',{
        pageTitle: 'Home',
        path:'/'
    });
    return res.end();
}

exports.getShowProducts = (req, res, next) => {
    console.log('In get show-products-user middleware!');
    product.fetchAll((products)=>{
        res.render('shop/show-products-user',{
            prods:products,
            path:'shop/show-products-user',
            pageTitle: 'Show Products'
        });
        return res.end();
    }
    );
}

exports.getShowCart = (req, res, next) => {
    console.log('In get show-cart middleware!');
    res.render('shop/cart',{
        pageTitle: 'Cart',
        path: 'shop/cart'
    });
    return res.end();
}

exports.getCheckout = (req, res, next) => {
    console.log('In get checkout middleware!');
    res.render('shop/checkout',{
        pageTitle: 'Checkout',
        path: 'shop/checkout'
    });
    return res.end();
}

exports.getProductDetails = (req, res, next) => {
    console.log('In get product-details middleware!');
    productID = req.params.productID;
    console.log('Product ID: '+productID);
    product.searchProduct(productID,(foundProduct,isFound)=>{
        if(isFound){
            res.render('shop/product-details',{
                pageTitle: 'Product Details',
                path: 'shop/product-details',
                product: foundProduct
            });
        }else{
            res.redirect('/shop/product-not-found');
        }
        return res.end();
    });
    
}