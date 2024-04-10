var main=document.getElementById("mainDiv")

// fnc triggered when user clicks btn to add a new todo 
function fun(){
    let inp=document.getElementById("inp").value;
    let id=Date.now(); //to geneate a unique id
    
    // d1.innerHTML=inp;

    console.log(inp)

    //create a obj 
    let obj={
        todo:inp,
        t_id:id
    }

    fetch("http://127.0.0.1:9000/addtodo",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        
    })
    .then((response) => response.json())
    .then(data => {
       //console.log(data);
    })
      // .then(data => {
      //   console.log(data.json())
      //   console.log('Server response:', data);
      // })
      .catch(error => {
        console.error('Error uploading file:', error);
      });  

}

async function displayData(){

  fetch("http://127.0.0.1:9000/gettodo",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        
        
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data.data);
        data.data.forEach((e)=>{

          let d1 = document.createElement("div")
          let d2 = document.createElement("div")
          let d4 = document.createElement("button")
          d1.innerHTML = e.todo
          //console.log("its id")
          //console.log(e.t_id)
         d1.setAttribute("id",${e.t_id})
         d4.setAttribute("id",${e.t_id})
         d4.addEventListener("click",(e1)=>{
              const id=e1.target.id 
              console.log("i......")
              console.log(id);
              obj3={
                divId:id
              }
             
              fetch("http://127.0.0.1:9000/deltodo",{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj3)
                
            })
            .then((response) => response.json())
           .then(data => {
       //console.log(data);
            })
            })
         
         
         main.appendChild(d1)
      
         main.appendChild(d4)
        
        

        })
        
    })
  
    
    
}


const buttons = document.getElementsByTagName("button");
console.log(buttons)

// buttons.forEach((e)=>{
//   e.addEventListener("click",(e1)=>{
//     const id=e1.target.id 
//     console.log("i......")
//     console.log(id);
//   })
// })

//load only when document is fully loaded.
document.addEventListener("DOMContentLoaded",displayData())