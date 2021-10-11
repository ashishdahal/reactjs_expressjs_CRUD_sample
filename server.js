const express = require('express');
const cors = require ('cors');
const app = express();

app.use(cors());

app.use("/login",(req,res)=>{
  res.send({
    token:'test123',
    username:'ashish@ashish.com',
    password:'apple'
  });
});

app.use("/datastore",(req,res)=>{
  res.send({
    yname:'ashish',
    age:'23',
    title:'Apple',
    date:'236784872364',
    task:'Test Crud Prog'
  });
});

app.listen(8080,()=>console.log("Api is running on localhost8080"));