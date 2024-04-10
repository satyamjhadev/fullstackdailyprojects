const express = require("express");
app=express()
app.use(express.json())
const cors= require("cors")
const { default: mongoose } = require("mongoose");
app.use(cors())
mongoose.connect("mongodb://localhost:27017/addtodo1")

const todoSchema = new mongoose.Schema({
    todo:String,
    t_id:String,
    
})
const todoModel = mongoose.model("todoModel", todoSchema);


app.post("/addtodo",function(req,res){
    //console.log(req.body);
    const inp = req.body.todo;
    const t_id= req.body.t_id;
    console.log(inp) 
    const addtodo = new todoModel({
     todo:inp,
     t_id:t_id
    })
    addtodo.save()
    .then((data) => {
        res.send(data);
    })
    .catch((err)=> {
        res.send(err)
    })
    
    })

    app.get('/gettodo',async (req,res)=>{
        //console.log("called")
        todoModel.find()
        .then((All_doto)=> {
            console.log(All_doto)
             res.status(202).json({ data:All_doto
            })
        })
    
        .catch(err=>console.log(err))
    });
    app.put('/deltodo',async (req,res)=>{
        const id11=req.body.divId
        console.log("called")
        console.log(id11)
        todoModel.findOneAndDelete(id11)
        .then((All_doto)=> {
            console.log(All_doto)
             res.status(202).json({ data:All_doto
            })
        })
    
        .catch(err=>console.log(err.message))
    });



app.listen(9000,()=>{
        console.log("server found")
})