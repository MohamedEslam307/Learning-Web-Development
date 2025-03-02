const express = require('express');

const path = require('path');

const app = express();

const error = require('./controllers/error');
const userRoutes = require('./routers/user');
const adminRoutes = require('./routers/admin');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes.router);
app.use(userRoutes.router);

app.use(error.get404);

app.listen(3000);