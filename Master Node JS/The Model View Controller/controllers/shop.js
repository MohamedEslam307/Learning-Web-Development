const product = require('../models/product');
const cart = require('../models/cart');

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
    cart.getTotalPrice(totalPrice=>{
        console.log('Total Price: '+totalPrice);
        prodcuts=cart.fetchAll(products=>{
            res.render('shop/cart',{
                pageTitle: 'Cart',
                path: 'shop/cart',
                products: products,
                totalPrice: totalPrice
            });
            return res.end();
        });
    });
    
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

exports.getAddToCart = (req, res, next) => {
    productID = req.params.productID;
    console.log('In get add-to-cart middleware! Product ID: '+productID);
    product.searchProduct(productID,(foundProduct,isFound)=>{
        if(isFound){
            cart.addProduct(foundProduct.id,isAdded=>{
                if(isAdded){
                    console.log('Product added to cart!');
                    res.redirect('/shop/show-products-user');
                }else{
                    console.log('Product not added to cart!');
                    res.redirect('/shop/product-not-found');
                }
                return res.end();
            });
        }else{
            console.log('Product not found!');
            res.redirect('/shop/product-not-found');
            return res.end();
        }
    });
}

exports.getProductdelete = (req, res, next) => {
    productID = req.params.productID;
    console.log('In get delete-item middleware! Product ID: '+productID);
    cart.deleteProduct(productID,isDeleted=>{
        if(isDeleted){
            console.log('Product deleted from cart!');
            res.redirect('/shop/cart');
        }else{
            console.log('Product not deleted from cart!');
            res.redirect('/shop/product-not-found');
        }
        return res.end();
    });
}

exports.getProductdeleteItem = (req, res, next) => {
    productID = req.params.productID;
    console.log('In get delete-product middleware! Product ID: '+productID);
    cart.deleteProductItem(productID,isDeleted=>{
        if(isDeleted){
            console.log('Product deleted from cart!');
            res.redirect('/shop/cart');
        }else{
            console.log('Product not deleted from cart!');
            res.redirect('/shop/product-not-found');
        }
        return res.end();
    });
}

