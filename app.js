const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin');
const UserRoute = require('../Express api/routs/user.routs');
const CategoryRoute = require('../Express api/routs/category.routs');
const AdminRoute = require('../Express api/routs/admin.routs')
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/User',UserRoute);
app.use('/Category',CategoryRoute);
app.use('/Admin',AdminRoute);
app.listen(3000,()=>{
    console.log('server..')
});