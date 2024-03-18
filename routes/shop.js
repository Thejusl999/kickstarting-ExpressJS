const express=require('express');
const router=express.Router();

const path=require('path');
const rootDir=require('../util/path');

// here the actual route will be /shop which is filtered in app.js, so '/' works
router.get("/", (req, res, next) => {
    // approach-1
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    // approach-2
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;