/**
 * Created by daniel.potts on 20/08/15.
 */
/*
 * Created by daniel.potts on 20/08/15.
 */
//Display the first & last value of an array & CSV format
var theArray = [3, 4, 9, 14];
var lastNumber = theArray.pop();
var newArray =["man", "bear", "pig"];
var divThree = [];
var compiledArray = (newArray.concat(theArray));
console.log("The last number is " + lastNumber);
console.log("The first number is " +theArray[0]);
console.log("The entire array is " +compiledArray.join(", "));
for(var i =0; i < theArray.length; i++ ){
    if (theArray[i] % 3 == 0){
        divThree.push(theArray[i]);
        console.log(divThree + " is divisible by 3");}}

