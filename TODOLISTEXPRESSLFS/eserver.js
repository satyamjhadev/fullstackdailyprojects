const express=require("express")
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser");

app.use(bodyParser.json());

app.use(express.static("."))
app.use(express.urlencoded());



// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Endpoint to receive array data from the frontend
app.post('/saveData', (req, res) => {
  const dataArray = req.body;

  // Convert array data to a string
  const dataString = dataArray.join(', ');

  // Specify the file path
  const filePath = 'task.txt';

  // Write the data to the file
  fs.writeFile(filePath, dataString, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data saved to file successfully!');
      res.status(200).send('Data saved successfully');
    }
  });
});



// app.post("/addtask",(req,res)=>{
//   fs.readFile("task.txt","utf-8",(err,data)=>{

//     let records=JSON.parse(data);
//     let results =records.filter((item)=>{
//       if(item.username==req.body.currtask)
//       return true;
//     })
//     if(results.length==0)
//     res.send("invalid entry ")

//     else
//     res.end("welcome")

//   })
// })





app.listen(3000,(err)=>{
  console.log("server started")
})