//array declaration
var courses = ["angular", "typescript", "javascript"]; //it assumes all are string values
//later push value into array
courses.push("java");
// courses.push(12);// cant push number into string arrays
//to access
for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
    var item = courses_1[_i];
    //to access array we use for-of
    console.log(item);
}
//normal loop can be used for array as well
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
//----------------------------------------------------------
//if yu want add any type of value, then specify type for array
var arrayValues = ["anu", "suya"]; //any type
arrayValues.push(11); //number allowed
for (var i = 0; i < arrayValues.length; i++) {
    console.log(arrayValues[i]);
}
