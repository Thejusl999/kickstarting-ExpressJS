const http = require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();
});
app.use((req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
    // res.send('<h2> hello to node js </h2>')
    // res.send( { key1: value })
    // res.send( { key1: 'value' })
});
// 1. Using createServer first and then doing listen separately
/* const server=http.createServer(app);
server.listen(3000); */

// 2. Using app.listen-creates the server and listens too in a single line of code
app.listen(3000);