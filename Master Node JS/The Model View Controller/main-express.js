const express = require('express');

const path = require('path');

const app = express();

const error = require('./controllers/error');
const shopRoutes = require('./routers/shop');
const adminRoutes = require('./routers/admin');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes.router);
app.use(shopRoutes.router);
app.use(error.get404);

app.listen(3000);