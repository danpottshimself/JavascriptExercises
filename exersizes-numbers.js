/**
 * Created by daniel.potts on 19/08/15.
 */
//finding out if a number is odd or even
 var theNumber = 11;

 if (theNumber % 2 ==0){
 console.log("The number " + theNumber + " is even");
 }
 else {
 console.log("The number " + theNumber + " is odd");
 }


//converting celsius to farenheit
 function convert (celsius){
 var fahrenheit = ((celsius * 9/5) +32);
 console.log(celsius +" degrees celsius equates to: "+fahrenheit + " "+ "fahrenheit");
 }
 convert(12);

//converting celsius to radians
function convertToRadians () {
    var celsius = 12;
    var radians = ((Math.PI/180) *celsius);
    console.log(celsius +" degrees celsius equates to: "+ radians + " radians");
}
convertToRadians();

//finding the hypotenuse length
var perplength = 8;
var base = 4;
var oppositeLength= 11;
var angle = 73;
var hypoth = ((perplength*perplength) + (base*base));
var hypotenuse = Math.sin(angle)*oppositeLength;

console.log("The Hypotenuse length is: " + Math.round(Math.sqrt(hypoth)));
console.log("The Hypotenuse length is: " + hypotenuse + " radians");

//rolling a six sided dice
var Die = function(sides) {
    this.sides = sides || 6;
};
Die.prototype.roll = function() {
    return Math.floor((Math.random()*this.sides)+1);
};
var die = new Die();
console.log(die.roll());
