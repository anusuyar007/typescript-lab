//var args stands for variable arguments.
//you shd specify parameter type in typescript
//here return type nt required, prdt will store value
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(1, 2, 3, 4, 5)); // 120
console.log(product(1, 2, 3)); // 6
console.log(product(3)); // 3
//-------------------------------------------------------
//if yu want fixed two param and then any number of param
//varargs or rest params is of array type, specify any or array type
//cant use varargs at beginning of parameter list
var pdt = function (num1, num2) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    console.log("hey");
};
pdt(1, 2, 3, 4);
//(...nums:any, num1:number) //cant use like this, use rest params only at end
//any type yu can specify -> number[],string[], etc or just any
