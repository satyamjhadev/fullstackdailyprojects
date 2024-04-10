function clickhandle(e){
  console.log("click handle");
  console.log(e);
}

function clickhandle1(){
  console.log("click handle1");
}

//with onclick only 1 fnc 
let button1=document.querySelector("#button1");
button1.onclick=clickhandle; //only refrence
button1.onclick=clickhandle1;   // only clickhandle1

//with .addeventlistener

button1.addEventListener("click",clickhandle); //both works
button1.addEventListener("click",clickhandle1);

