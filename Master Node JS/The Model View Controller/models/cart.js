const fs = require('fs');
const path = require('path');
const product = require('./product');

class Cart {
    static getCartFilePath() {
        return path.join(path.dirname(require.main.filename), 'data', 'cart.json');
    }

    static readCartFile(cb) {
        fs.readFile(this.getCartFilePath(), (err, fileContent) => {
            if (err || !fileContent.length) {
                return cb(null, { products: [], totalPrice: 0 });
            }
            try {
                cb(null, JSON.parse(fileContent));
            } catch (parseErr) {
                cb(parseErr, null);
            }
        });
    }

    static writeCartFile(cart, cb) {
        fs.writeFile(this.getCartFilePath(), JSON.stringify(cart, null, 2), (err) => {
            if (err) {
                console.error("Error writing cart file:", err);
                return cb(false);
            }
            cb(true);
        });
    }

    static addProduct(productID, cb) {
        this.readCartFile((err, cart) => {
            if (err) return cb(false);

            const cartProduct = cart.products.find(p => p.id === productID);
            
            product.searchProduct(productID, (prod, isFound) => {
                if (!isFound) {
                    console.log(`Product not found: ${productID}`);
                    return cb(false);
                }
                
                if (cartProduct) {
                    cartProduct.quantity += 1;
                } else {
                    cart.products.push({ id: prod.id, quantity: 1, price: prod.price, title: prod.title, imageUrl: prod.imageUrl });
                }
                
                cart.totalPrice = (parseFloat(cart.totalPrice) + parseFloat(prod.price)).toFixed(2);
                this.writeCartFile(cart, cb);
            });
        });
    }

    static fetchAll(cb) {
        this.readCartFile((err, cart) => {
            if (err) return cb([]);
            cb(cart.products);
        });
    }

    static deleteProductItem(productID, cb) {
        this.readCartFile((err, cart) => {
            if (err) return cb(false);

            const cartProductIndex = cart.products.findIndex(p => p.id === productID);
            if (cartProductIndex === -1) return cb(false);
            
            const cartProduct = cart.products[cartProductIndex];
            cartProduct.quantity -= 1;
            if (cartProduct.quantity === 0) {
                cart.products.splice(cartProductIndex, 1);
            }
            cart.totalPrice = Math.max(0, (parseFloat(cart.totalPrice) - parseFloat(cartProduct.price)).toFixed(2));
            
            this.writeCartFile(cart, cb);
        });
    }

    static deleteProduct(productID, cb) {
        this.readCartFile((err, cart) => {
            if (err) return cb(false);

            const cartProduct = cart.products.find(p => p.id === productID);
            if (!cartProduct) return cb(false);

            cart.totalPrice = Math.max(0, (parseFloat(cart.totalPrice) - (cartProduct.quantity * parseFloat(cartProduct.price))).toFixed(2));
            cart.products = cart.products.filter(p => p.id !== productID);

            this.writeCartFile(cart, cb);
        });
    }

    static checkout(cb) {
        this.writeCartFile({ products: [], totalPrice: 0 }, cb);
    }

    static getTotalPrice(cb) {
        this.readCartFile((err, cart) => {
            if (err) return cb(0);
            cb(cart.totalPrice);
        });
    }
}

module.exports = Cart;
