class Passenger {
  firstName: string;
  lastName: string;
  frequentFlyerNo: number;

  constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.frequentFlyerNo = frequentFlyerNo;
  }
  display() {
    console.log(
      this.firstName + " " + this.lastName + " " + this.frequentFlyerNo,
    );
  }
}
//object creation
var pass = new Passenger("john", "bailey", 123);
//object creation
var pass2 = new Passenger("bob", "bailey", 456);

//access each object using for-in loop
for (let item in pass) {
  console.log(item); //key -> all field name and method name
  //to access value
  let value = item as keyof typeof pass;
  console.log(pass[value]);
}

// ------------------------------------------------------------
// to exlude method, you can do below steps
// for (let item in pass) {
//   if(item !== "display")
//   {
//     //then print the items
//   }
// }
// --------------------------------------------------------------
//another way of excluding method, use instanceof
// for (let item in pass) {
//   //here also we need to use keyof typeof, then only it will work.
//   if (pass[item] instanceof Function) {
//     continue;
//   } else {
//     //print the item
//   }
// }
// ----------------------------------------------------------------
