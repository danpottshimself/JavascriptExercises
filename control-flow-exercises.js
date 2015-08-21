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