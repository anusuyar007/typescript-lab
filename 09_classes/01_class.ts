class Passenger {
  //fields(property) | data
  firstName: string;
  lastName: string;
  frequentFlyerNo: number;

  //constructor
  constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.frequentFlyerNo = frequentFlyerNo;
  }
}
//object creation
var passenger = new Passenger("john", "bailey", 123);

console.log(
  passenger.firstName +
    " " +
    passenger.lastName +
    " " +
    passenger.frequentFlyerNo,
);

//object creation
var passenger2 = new Passenger("bob", "bailey", 456);
console.log(
  passenger2.firstName +
    " " +
    passenger2.lastName +
    " " +
    passenger2.frequentFlyerNo,
);
