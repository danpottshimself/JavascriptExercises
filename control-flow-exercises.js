/**
 * Created by daniel.potts on 20/08/15.
 */
//Create a triangle using astrix.
var numLines = 2;
var stars = ("*");
for (var lineNumber = numLines; lineNumber > 0; lineNumber--){
    for (var j = 0; j < lineNumber; j++){
        console.log(stars);
        stars += stars;}}

//equilateral triangle
function triangle(size){
    var stars = '';
    var spaces = '';
    for(var i = 0 ; i < size; i++){
        spaces = '';
        for(var j = size -1-i; j > 0; j--) {
            spaces += ' ';
        }
        stars += '*';
        if(stars.length > 1) {
            stars += '*';
        }
        console.log(spaces+stars);}}
triangle(22);

//Fibonacci sequence
var anArray=[0,1];
for(var i = 1; i < 10; i++) {
    var result =anArray[i-1]+anArray[i];
    anArray.push(result);
}
console.log(anArray);

//Loop of 100 stating Java or Script when divisible by 3 or 5.
for (var k =0; k<100; k++){
    if (k%3 ===0 && k%5!=0){
        console.log("Java");
    }
   else if (k%5 ===0 && k%3!=0){
        console.log("Script");
    }
   else  if(k%5 ===0 && k%3===0){
        console.log("JavaScript");
    }
    console.log(k);
}

var bubbles = [1,5,7,9,4,5,7,5,2,3,1,9,4,8];

for (var z = 0; z >bubbles.length; z++){
    if(-z.value > z.value){
    }
}
