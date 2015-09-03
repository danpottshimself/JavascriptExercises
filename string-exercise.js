/**
 * Created by daniel.potts on 19/08/15.
 */
//hello world
var theString = "hello world" + " JavaScript can use either “double quotes” or ‘single quotes’ to denote text.";
var theArray = theString.split(" ");
console.log(theArray);

//Extracting records from the following CSV
var records = [1997, "Ford","E350",'"Super luxurious” truck'];
    for (var i = 0; i < records.length; i++){
    console.log("This record is " + records[i]);
}
//Find the position of the first vowel in the text
var word ="JSDFHDVHUEVDAKNDSEINX";
console.log(word.search('[AEIOU]'));

//Use a regex to determine if a given string is a number.
var numberCheck = function (sentence) {
   sentence = "This contains 1 number";
    var number = /[0-9]/g;
    if (sentence.match(number)) {
        console.log("Contains a number")
    }
    else {
        console.log("Does not contain a number");}};
numberCheck();

//Use a regex to determine Postcode validity
function postcodeCheck (postcode){
     var validPostcode = /^([a-zA-Z]){1}([0-9][0-9]|[0-9]|[a-zA-Z][0-9][a-zA-Z]|[a-zA-Z][0-9][0-9]|[a-zA-Z][0-9]){1}([ ])([0-9][a-zA-z][a-zA-z]){1}$/;
    if (postcode.match(validPostcode)){
        console.log("postcode is valid")
    }
    else {
        console.log("postcode is not valid")}}
postcodeCheck("NE28 7DR");