//--------------------------------------------------------------------------------------
//number data type
var x: number = 123;
// x = "123"; //only number type value you can add or modify, no other type.
console.log(x);
//---------------------------------------------------------------------------------------
//string data type
var str1: string = "you are the creator of your destiny !"; //double quotes
var str2: string =
  "All the power is within you, You can do anything and everything !"; //single quotes
var str3: string = `you are inside backtick symbol !`; //back tick
// str3 = 123; //only string type value you can add or modify, no other type.
console.log(str1);
console.log(str2);
console.log(str3);
//----------------------------------------------------------------------------------------
//boolean data type
var b1: boolean = true;
var b2: boolean = false;
// b2 = "anusuya";//only boolean type value you can add or modify, no other type.
console.log(b1);
console.log(b2);
//---------------------------------------------------------------------------------------
//any type - any type value can be stored.
var a1: any = "anusuya";
a1 = true; //but here any type yu can kp changing
a1 = 123; // any type, no error at all
console.log(a1);
//--------------------------------------------------------------------------------------
//homogeneous array type
var array1: Array<String> = ["anu", "suya", "siya"];
console.log(array1); //all array value will be displayed //in browser console, it will be displayed with index and value.
console.log(array1[0]); // specific index value will be displayed
//--------------------------------------------------------------------------------------
//heterogeneous array type
var array2: Array<any> = [123, "suya", true, {}, []];
console.log(array2); //all array value will be displayed //in browser console, it will be displayed with index and value.
console.log(array2[0]); // specific index value will be displayed
//--------------------------------------------------------------------------------------
