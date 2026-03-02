class PassengerOne {
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

  //create function to display
  //instead of using console multiple times, write method once and call any number of times
  display() {
    console.log(
      this.firstName + " " + this.lastName + " " + this.frequentFlyerNo,
    );
  }
}
//object creation
var pass = new PassengerOne("john", "bailey", 123);
pass.display();

//object creation
var pass2 = new PassengerOne("bob", "bailey", 456);
pass2.display();
