/**
 * Created by daniel.potts on 19/08/15.
 */
//hello world
console.log("hello world" + " JavaScript can use either “double quotes” or ‘single quotes’ to denote text.");
//Extracting records from the following CSV
var records = [1997, "Ford","E350",'"Super luxurious” truck'];
    for (var i = 0; i < records.length; i++){
    console.log("This record is " + records[i]);
}
//Find the position of the first vowel in the text
var word ="JSDFHDVHUEVDAKNDSEINX";
console.log(word.search('[AEIOU]'));

//Use a regex to determine if a given string is a number.
var isANumber = isNaN("twenty")=== false;

if (isANumber) {
    console.log("Is a number");
}
else {
    console.log("Is not a number");
}