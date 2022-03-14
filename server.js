const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json({message:'I am alive and listening'})
})


app.listen(3000,()=>{
    console.log('Listening to port 3000')
})