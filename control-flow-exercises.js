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

//Bubblesort an array
var numbers = [1,6,23,69,32,42,36,81,100];
function sortArray(numbers) {
    var swappedOut;
    do {
        swappedOut = false;
        for (var i=0; i < numbers.length-1; i++) {
            if (numbers[i] > numbers[i+1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swappedOut = true;}}}
     while (swappedOut);
}
sortArray(numbers);
console.log(numbers);