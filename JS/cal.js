// var x=5;
 //if(x==5)
// {
   // console.log("value of x=5")

// }
 //console.log("value of x !=5 ")
 var no=5;
 switch(no){
   case 5:{
      console.log('no==5');
      break;
   }
   case 7:{
      console.log('no==7');
      break;
   }
    default:{
      console.log('!=5 and 7');
      break;
   }
 }

//var x=[1,3,5];
//console.log(x);
//x.push([11,22,33]);
//console.log(x);
//x[3].push([111,222,333]);
//console.log(x);
//console.log(x[3]);
var x=[1,3,5];
x.splice(1,0,7,8);
console.log(x);

