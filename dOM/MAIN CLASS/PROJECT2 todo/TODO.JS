let taskname=document.querySelector("#taskname");
let tasks=document.querySelector("#tasks");


//array to store all dta of task
let 



//IDENTIFY KEYPRESS AS ENTER
taskname.addEventListener("keypress",(e)=>{
    //console.log(e);

    if(e.keyCode==13){
      console.log("enter pressed")
      AddTask();
      //AddtoUI();
    }

});



function AddtoUI(){
  let div=document.createElement("div"); //add new div for every tasks
  let span=document.createElement("span");
  //let txtnode=document.createTextNode("taskname.value");
  //span.appendChild(txtnode);

  span.innerHTML=taskname.value;
  div.appendChild(span)
  tasks.appendChild(div);
  taskname.value=""; //reset the box but stills add new div on enter

}
