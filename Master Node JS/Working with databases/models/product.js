const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(product) {
        this.id = Math.floor(Math.random() * 1000000000); // Assign random ID in constructor
        this.title = product.productname;
        this.price = product.productprice;
        this.description = product.productdescription;
        this.quantity = product.productquantity;
        this.imageUrl = product.productimageUrl;
    }

    static getFilePath() {
        return path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    }

    static readFile(cb) {
        fs.readFile(this.getFilePath(), (err, fileContent) => {
            if (err || fileContent.length === 0) {
                cb([]);
            } else {
                cb(JSON.parse(fileContent));
            }
        });
    }

    static writeFile(data, cb) {
        fs.writeFile(this.getFilePath(), JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.log(err);
                cb(false);
            } else {
                cb(true);
            }
        });
    }

    edit(oldProduct, cb) {
        Product.readFile((products) => {
            const updatedProducts = products.map(p => {
                if (p.id === oldProduct.id) {
                    p.title = this.title || p.title;
                    p.price = this.price || p.price;
                    p.description = this.description || p.description;
                    p.quantity = this.quantity || p.quantity;
                    p.imageUrl = this.imageUrl || p.imageUrl;
                }
                return p;
            });
            Product.writeFile(updatedProducts, cb);
        });
    }

    remove(cb) {
        Product.readFile((products) => {
            const updatedProducts = products.filter(p => p.id !== this.id);
            Product.writeFile(updatedProducts, cb);
        });
    }

    save(cb) {
        Product.readFile((products) => {
            products.push(this);
            Product.writeFile(products, cb);
        });
    }

    static fetchAll(cb) {
        Product.readFile(cb);
    }

    static searchProduct(id, cb) {
        Product.readFile((products) => {
            const product = products.find(p => {
                console.log(p.id+' '+id);
                return p.id === id;
            });
            cb(product || null, !!product);
        });
    }
};
