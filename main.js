'use strict';

var limit = 30;
var a = 0;
var b = 1;
//console.log(a);

/*if(limit > 0){
  console.log(b);
}*/

/*while( a <= limit){
  console.log(a);
  var temp = a + b;
  a = b;
  //b = a + b;
  b = temp;
 
}*/

for( var a = 0; a <= limit; ){
  console.log(a);
  var temp = a + b;
  a = b;
  b = temp;
  
}
