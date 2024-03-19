const express=require('express');
const router=express.Router();

const productsController=require('../controllers/products');

// here the actual route will be /shop which is filtered in app.js, so '/' works
router.get("/",productsController.getProducts);

module.exports=router;