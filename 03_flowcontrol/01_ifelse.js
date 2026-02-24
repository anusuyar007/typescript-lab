var x = 10;
var y = 20;
//if else
if (x > y) {
    console.log("X is greater");
}
else {
    console.log("y is greater");
}
//------------------------------------------------------------------------
var a = 10;
var b = 10;
//if else(if both equal, then it gives b as greater which is wrong, so we use nested if)
if (a > b) {
    console.log("a is greater");
}
else {
    console.log("b is greater");
}
//if else ladder
if (a > b) {
    console.log("a is greater");
}
else if (b > a) {
    console.log("b is greater");
}
else {
    console.log("Both are equal");
}
//-----------------------------------------------------------------------
var n1 = 10;
var n2 = 20;
var n3 = 30;
//if else ladder
if (n1 > n2 && n1 > n3) {
    console.log("n1 is greater");
}
else if (n2 > n1 && n2 > n3) {
    console.log("n2 is greater");
}
else if (n3 > n1 && n3 > n2) {
    console.log("n3 is greater");
}
else {
    console.log("all are equal");
}
//--------------------------------------------------------------------------
//nested if
if (10 < 20) {
    if (5 > 1) {
        console.log("hey im inside nested if");
    }
}
//---------------------------------------------------------------------------
