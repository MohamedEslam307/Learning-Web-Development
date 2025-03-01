const express = require('express');
const path = require('path');

const app = express();

const productRoutes = require('./routers/user');
const adminRoutes = require('./routers/admin');


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes.router);
app.use(productRoutes);
app.use((req,res,err)=>{
    res.status(404).render('page-not-found',{pageTitle: 'Page Not Found'});
})

app.listen(3000);