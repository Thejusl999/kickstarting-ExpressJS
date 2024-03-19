const express=require('express');
const router=express.Router();

const contactusController=require('../controllers/contactUs');

router.get("/contactus",contactusController.contactusPage);
router.post("/success",contactusController.successPage);

module.exports=router;