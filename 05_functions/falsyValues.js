//if number is 0, then if condition will not work
var num = 0;
if (num) {
    console.log("Im zero, I wont work");
}
//------------------------------------------------------------------------------------
//if zero has to work, then use null check and undefined
if (num !== undefined && num !== null) {
    console.log("Hey im a zero");
}
//------------------------------------------------------------------------------------
//if im boolean value false, then i will not work. I work only for true.
var bool = false;
if (bool) {
    console.log("Hey Im boolean value false, I wont work");
}
//------------------------------------------------------------------------------------
//if value is not given then im undefined.
//if in object, there is no particular property but trying to access the property which
// doesnt exist, then im undefined.
var checkValue;
if (checkValue) {
    console.log("Hey Im undefined, I wont work");
}
var obj1 = {};
// if(obj1.name) //this is undefined and directly throws error
// {
// }
//------------------------------------------------------------------------------------
//if im empty string, I wont work
var str = "";
if (str) {
    console.log("Im empty string, I wont work");
}
str = " "; //if space, then i will work
if (str) {
    console.log("Im space, I will work");
}
//------------------------------------------------------------------------------------
//if not a number(nan)
var num2 = Number("abc"); // converting a string abc to number, then it returns Nan
if (num2) {
    console.log("Im not a number, so i wont work");
}
//------------------------------------------------------------------------------------
// if objet is null, then I wont work
var obj2 = null;
if (obj2) {
    console.log("If im null, I wont work");
}
//------------------------------------------------------------------------------------
