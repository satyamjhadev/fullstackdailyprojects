let addbtn=document.querySelector("#addbtn");
let name=document.querySelector("#name");

let description=document.querySelector("#description");
let price=document.querySelector("#price");




addbtn.addEventListener("keypress",(e)=>{
   
  if(e.keyCode==13){
      console.log("enter pressed")
      AddTask(); //add to local strorage.
      AddtoUI(); //add product to ui page 
    }

});

function AddtoUI(){
  let div=document.createElement("div"); //add new div for every tasks
  let span1=document.createElement("span");
  let span2=document.createElement("span");
  let span3=document.createElement("span");
 
//span1.innerText=name.value;
span2.innerText=description.value;
span3.innerText=price.value;

  div.appendChild(span)
  div.appendChild(span1)
  div.appendChild(span2)
  div.appendChild(span3);
  //name.value=""; //reset the box but stills add new div on enter
  description.value="";
  price.value="";

}
