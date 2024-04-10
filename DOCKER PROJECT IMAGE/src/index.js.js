const express=require("express")
const app=express();


app.get('/',(req,res)=>{
  res.send("welcome this is my first application");
})

app.listen(3000,()=>{
  console.log("server started")
})