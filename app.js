const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Importing from admin.js and shop.js
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
// Moved into admin.js
/* app.use("/add-product", (req, res, next) => {
  // console.log('In another middleware!');
  res.send(
    `<form action="/product" method="POST">
        <input type="text" name="title" placeholder="Enter Product Title"/><br></br>
        <input type="text" name="size" placeholder="Enter Product Size"/><br></br>
        <button type="submit">
            Add Product
        </button>
    </form>`
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
}); */

app.use('/shop',shopRoutes);
// Moved into shop.js
/* app.use("/", (req, res, next) => {
  // console.log('In another middleware!');
  res.send("<h1>Hello from Express!</h1>");
});
 */

/* app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not found</h1>')
}); */

app.listen(3000);