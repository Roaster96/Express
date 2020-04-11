const express = require("express");

const app = express();

const port = 8000;

app.get("/login",(req,res)=>{          //ALL the methods are correct for app.get
    return res.send("Login page");      // req => Request is the HTTP request. It gives us all the request information, including the request parameters, the headers, the body of the request, and more  
});                                     // res => Response is the HTTP response object that we'll send to the client.

app.get("/",(req,res)=>(res.send("I'm Home page")));

app.get("/signup",(req,res)=>res.send("I'm SignUp"));

app.get("/sarthak",(req,res)=>res.send("Sarthak uses instagram"));

app.get("/shop",(req,res)=>res.send("I'm shop"));

app.listen(port,()=>{
   return console.log("Server is running.........");
})

