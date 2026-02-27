var myarray = [];
var _loop_1 = function (i) {
    //push arrow function one by one into array
    //array.push(():returntype => {}) //inside parenthesis it is arrow function
    myarray.push(function () {
        return i;
    });
};
//to push arrow function into array
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
//to see each arrow function declaration
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]); //actual function declaration yu cant see,
    //  but it displays function anonymous
}
//to see only the result of each arrow function, then use ()
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]()); //calling arrow function
}
