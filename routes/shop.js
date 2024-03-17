const express=require('express');
const router=express.Router();

// here the actual route will be /shop which is filtered in app.js, so '/' works
router.get("/", (req, res, next) => {
    res.send("<h1>Hello from Express!</h1>");
});

module.exports=router;