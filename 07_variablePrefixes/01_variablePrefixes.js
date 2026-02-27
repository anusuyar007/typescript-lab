//variable scopes
//-------------------------------------------------------------------------
for (var i = 0; i < 1; i++) {
    console.log(i);
}
console.log(i); //if u use var, i is accessible outside forloop also
//-------------------------------------------------------------------------
for (var j = 10; j < 11; j++) {
    console.log(j);
}
// console.log(j); //if u use let, j is not accessible outside for loop.
//-------------------------------------------------------------------------
