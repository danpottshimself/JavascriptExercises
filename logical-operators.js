/**
 * Created by daniel.potts on 20/08/15.
 */
//Declare two variables and output the largest

var smallNumber = 10;
var bigNumber = 13;
    if (bigNumber > smallNumber){
    console.log(bigNumber);}
    else {
    console.log(smallNumber)}

//Declare three variables and output the product and whether product is negative or not.
var negcheck = function(value1,value2,value3) {
var answer = value1 * value2 * value3;
console.log("The product is" + answer);
    if (answer > 0) {
        console.log("Product is positive!");}
    else {
        console.log("Product is negative!");}}
negcheck(8,-3,2);

//A grading system: if the score provided is less that 40 = F, less than 50= E etc up to A. No A*, they’re just a whack idea to cover up the fact exams are too easy.
var results = function (grades){
var check = grades;
console.log("your grade is " + check);
    if (check < 40) {
        console.log("You got an F");}
        else if(check < 50) {
            console.log("You got an E");}
         else if (check < 55){
          console.log("You got a D");}
            else if(check <60) {
                console.log("You got a C");}
               else if (check <70){
                    console.log("You got a B")}
                 else if(check <80){
                    console.log("You got an A");}}
results(70);