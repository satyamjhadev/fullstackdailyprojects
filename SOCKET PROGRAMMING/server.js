//craete chat rooms for every group ::namespaces

const express=require("express");
const { disconnect } = require("process");

const app=express();

app.use(express.static("."));


//require http and create a server with it.

const server=require("http").createServer(app);





const customio=io.of("/custom-name")
customio.on




//const sockets=require("socket.io");
//const io=sockets(server);
let users=0; //broadcasting 
const io=require("socket.io")(server);
//depends on page load socket variable in the chat.html
io.on("connection",()=>{
  console.log("user connected");
  users++;
// braodcast to all but not me .
socket.emit("mymessage","welcome to chat appliaction")

socket.broadcast.emit("mymessage","${users} users connected")



  //io.sockets.emit("mymessage","${users} user connected" ) //broadcast to all;


  //send on message emit or use emit
//socket.send("hello from server")

setTimeout(() => {
  socket.emit("message","hello from server ")
}, 3000);

  socket.on("disconnect",()=>{
    console.log("user disconnected");
    users--;
  })
})

server.listen(3000);
