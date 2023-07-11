var x = 3;
Var y = "3";
x - y = 0


var name = "Vivek";
var surname = " Bisht";
name + surname     // Returns "Vivek Bisht" 


var x = 24;
var y = "Hello";
x + y   // Returns "24Hello"; 


var x = 3;
var y = "3";
x + y // Returns "33" 


var x = 0;
var y = 23;       
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)          
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)


var x = 220;
var y = "Hello";
var z = undefined;       
x | | y    // Returns 220 since the first value is truthy        
x | | z   // Returns 220 since the first value is truthy       
x && y    // Returns "Hello" since both the values are truthy     
y && z   // Returns undefined since the second value is falsy        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}          
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}
