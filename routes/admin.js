const express=require('express');
const router=express.Router();

const productController=require('../controllers/products');

// actual route we are reaching to is: /admin/add-product BUT=>GET request
router.get("/add-product",productController.getAddProduct);

// actual route we are reaching to is: /admin/add-product BUT=>POST request
router.post("/add-product",productController.postAddProduct);

module.exports=router;