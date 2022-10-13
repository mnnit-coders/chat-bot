const express=require('express');
const app=express();
app.listen(3000);
app.get('/',function(req,res){
    res.sendFile('./git/index.html',{root:__dirname});
});
//redirects-------------->


app.get('/about',(req,res)=>{
    res.redirect('/');
})