/*
 * Created by daniel.potts on 20/08/15.
 */
//Fuel calculator: for a given MPG and distance, calculate the number of gallons of fuel needed for a trip.
var gallons  = function (mpg, distance) {
    var gallonsRequired=(distance/mpg);
    return gallonsRequired;
};
gallons(68,5);

//Write a love calculator:
var length=function (name1,name2) {
    var nameLength1=name1.length,
        nameLength2=name2.length;
    var result=((nameLength1 +nameLength2)-(Math.random()* 6));
    result *=42;
    if (result >100) {
        result = 100;
        return result;
    }
    else {
        return Math.round(result);
    }
};
length("dan","zoe");
//Calculate the area of a circle for a given radius and diameter.
var circle=function(radius){
    var area = Math.PI*(radius*radius);
    return area;
};
circle(5);

