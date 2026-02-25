var Vaccines = ["J&J", "Pfizer", "Sputnik"];
Vaccines.push("Covaxin");

for (let i = 0; i < Vaccines.length; i++) {
  console.log(Vaccines[i]);
}

//destructuring
var [a, b, c, d] = Vaccines;
console.log(a + " , " + b + " , " + c + " , " + d);
