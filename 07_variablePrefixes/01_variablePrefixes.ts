//variable scopes
//-------------------------------------------------------------------------
//var
for (var i = 0; i < 1; i++) {
  console.log(i);
}
console.log(i); //if u use var, i is accessible outside forloop also

//-------------------------------------------------------------------------
//let
for (let j = 10; j < 11; j++) {
  console.log(j);
}
// console.log(j); //if u use let, j is not accessible outside for loop.

//-------------------------------------------------------------------------
//const
const pi = 3.14;
// pi = 4.5;// yu vl get error, cant modify const value

//-------------------------------------------------------------------------
