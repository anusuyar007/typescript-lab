interface Exterior {
  color: string;
  numOfDoors: Number;
}

interface Interior {
  seats: number;
  auto: boolean;
}

interface Car extends Exterior, Interior {
  make: string;
  model: string;
  year: number;
}

//use
var myCar: Car = {
  color: "Black",
  numOfDoors: 4,
  seats: 4,
  auto: true,
  make: "Honda",
  model: "Civic",
  year: 2018,
};
//to display
console.log(myCar);
