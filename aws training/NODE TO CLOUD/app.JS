const PORT=process.env.PORT || 3000;


const express=require("express");

const app=express();

const userRoute=require("./routes/users");

app.use(express.json());

app.use('./users',userRoute);

app.get("/",(req,res)=>{
  res.send("<h1>Node js crud Api</h1> <h4>message</h4>")
})


app.listen(PORT,()=>{
  console.log("server started successfully");
})