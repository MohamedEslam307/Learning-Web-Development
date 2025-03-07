const express = require('express');

const path = require('path');

const app = express();

const error = require('./controllers/error');
const shopRoutes = require('./routers/shop');
const adminRoutes = require('./routers/admin');

const db = require('./util/database');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

db.execute('SELECT * FROM products')
.then(result=>{
    console.log(result[0]);
    console.log(result[1]);
})
.catch(err=>{
    console.log(err);
}
);

app.use('/admin',adminRoutes.router);
app.use(shopRoutes.router);
app.use(error.get404);

app.listen(3000);