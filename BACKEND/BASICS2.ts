function drawpoint(point(x:number,y:number)){    //object  as an arguments  : inline type definition
 
}

drawpoint({
  x:10,y:30

})


//creating interfaces  //can't make objects  //when making varible give value simuntanously
interface Point{
  x:number,
  y:number
}

function drawpoint(point:point){

}

let mypoint:point=(x:10,y:20);