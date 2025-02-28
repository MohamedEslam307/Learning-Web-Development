const express = require('express');
const path = require('path');

const app = express();

const productRoutes = require('./routers/user');
const adminRoutes = require('./routers/admin');

const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes.router);
app.use(productRoutes);
app.use((req,res,err)=>{
    res.status(404).sendFile( path.join(__dirname, 'views','page-not-found.html'));
})

app.listen(3000);