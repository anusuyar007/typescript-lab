var student = {
  firstName: "anu",
  lastName: "suya",
  score: 91,
};

//while destructuring object, the names should be exact else you will get error
var { firstName, lastName } = student; //destructuring object, goes from top to bottom

console.log(firstName + lastName);
