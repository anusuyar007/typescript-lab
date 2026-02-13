// within double quote, cant use double quote again, but single quote can be used. vice versa.
var str1 = "<a href = 'anu' /> ";
console.log(str1);
//yu can access dynamic values, if yu use backtick
var userName = "Anusuya";
var str2 = "${userName}"; //single quote and double quote will not work fr dynamic values.
console.log(str2);
var str3 = "".concat(userName);
console.log(str3);
//to use escape characters, u can use in both string and backtick and console.log as well.
var str4 = "\t Hi anu;"; //tab
var str41 = "\ hi hi"; //slash will not show
console.log(str4);
console.log(str41);
var str5 = " suya"; //slash will not display
var str6 = "\t anaswara"; //tab you will get
var str7 = "harshini \n"; //new line
var str8 = "harini \v shreya"; //vertical
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);
//if you want to print escape character itself than use double backslash
var str9 = "\\t siya";
var str10 = "\\t siyaaaaa";
console.log(str9);
console.log(str10);
