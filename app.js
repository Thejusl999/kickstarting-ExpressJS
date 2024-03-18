const express=require('express');
const app=express();
const fs=require('fs');

const parser=require('body-parser');
app.use(parser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send(`
        <form onSubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/users" method="POST">
            <input id="username" type="text" name="username" placeholder="username"><br>
            <button type="submit">
                Login
            </button>
        </form>
    `);
});
app.get('/',(req,res,next)=>{
    const path='chats.txt';
    fs.readFile(path,'utf8',(err,data)=>{
        let content=err&&err.code==='ENOENT'?`<p>No chats exist!</p>`:`<p>${data.replace(/\n/g, "<br>")}</p>`;
        res.send(`
            ${content}
            <form onSubmit="this.username.value=localStorage.getItem('username')" action="/write" method="POST">
                <input type="hidden" name="username">
                <input id="message" type="text" name="message" placeholder="message"><br>
                <button type="submit">
                    Send
                </button>
            </form>
        `);
    });
});
app.post('/users',(req,res,next)=>{
    res.redirect('/');
});
app.post('/write',(req,res,next)=>{
    const path='chats.txt';
    const message=`${req.body.username}: ${req.body.message}\n`;
    fs.appendFile(path,message,(err)=>{
        if(!err){
            console.log('message sent!');
        }
    });
    res.redirect('/');
});

app.listen(3000);