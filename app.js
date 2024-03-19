const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const path=require('path');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactusRoutes=require('./routes/contactus');
const errorController=require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactusRoutes);
app.use(errorController.get404);

app.listen(3000);