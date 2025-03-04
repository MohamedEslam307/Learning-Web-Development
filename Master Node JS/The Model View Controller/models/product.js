const fs = require('fs');
const path = require('path');

module.exports = class product {

    constructor(product) {
        this.title = product.productname;
        this.price = product.productprice;
        this.description = product.productdescription;
        this.quantity = product.productquantity;
        this.imageUrl = product.productimageUrl;
    }

    edit(oldProduct, cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err
            , fileContent) => {
            if (err || fileContent.length === 0) {
                cb(false);
            } else {
                const products = JSON.parse(fileContent);
                const updatedProducts = products.map(p => {
                    if (p.id === oldProduct.id) {
                        this.title ? p.title = this.title : p.title = p.title;
                        this.price ? p.price = this.price : p.price = p.price;
                        this.description ? p.description = this.description : p.description = p.description;
                        this.quantity ? p.quantity = this.quantity : p.quantity = p.quantity;
                        this.imageUrl ? p.imageUrl = this.imageUrl : p.imageUrl = p.imageUrl;
                    }
                    return p;
                });
                fs.writeFile(p, JSON.stringify(updatedProducts, null, 2), (err) => {
                    if (err) {
                        console.log(err);
                        cb(false);
                    }
                    cb(true);
                });
            }
        }
        );
    }

    remove(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err
            , fileContent) => {
            if (err || fileContent.length === 0) {
                cb(false);
            } else {
                const products = JSON.parse(fileContent);
                const updatedProducts = products.filter(p => p.id !== this.id);
                fs.writeFile(p, JSON.stringify(updatedProducts, null, 2), (err) => {
                    if (err) {
                        console.log(err);
                        cb(false);
                    }
                    cb(true);
                });
            }
        }
        );
    }

    save(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err && fileContent.length > 0) {
                products = JSON.parse(fileContent);
            }
            
            this.id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
            products.push(this);
            fs.writeFile(p, JSON.stringify(products, null, 2), (err) => {
                if (err) {
                    console.log(err);
                }
                cb();
            });
        });
    }

    static fetchAll(cp) {
        const p=path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err || fileContent.length === 0) {
                cp([]);
            } else {
                cp(JSON.parse(fileContent));
            }
        });
    }

    static searchProduct(id, cb) {
        const p=path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err || fileContent.length === 0) {
                cb(null, false);
            } else {
                const products = JSON.parse(fileContent);
                const product = products.find(p => p.id === id);
                if (product) {
                    cb(product, true);
                } else {
                    cb(null, false);
                }
            }
        });
    }

}

