const express = require('express');
const path = require('path');

const app = express();

const userRoutes = require('./routers/user');
const adminRoutes = require('./routers/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(userRoutes);
app.use((req,res,err)=>{
    res.status(404).sendFile( path.join(__dirname, 'views','page-not-found.html'));
})


app.listen(3000);