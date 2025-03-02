const fs = require('fs');
const path = require('path');

module.exports = class product {
    constructor(product) {
        this.title = product.productname;
        this.price = product.productprice;
        this.description = product.productdescription;
        this.quantity = product.productquantity;
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
            if (err) {
                cp([]);
            } else {
                cp(JSON.parse(fileContent));
            }
        });
    }
}

