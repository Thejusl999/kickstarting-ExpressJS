const express=require('express');
const router=express.Router();

const path=require('path');
const rootDir=require('../util/path');

// actual route we are reaching to is: /admin/add-product BUT=>GET request
router.get("/add-product", (req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// actual route we are reaching to is: /admin/add-product BUT=>POST request
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/shop");
});

module.exports=router;