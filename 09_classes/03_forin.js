var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
//object creation
var pass = new Passenger("john", "bailey", 123);
//object creation
var pass2 = new Passenger("bob", "bailey", 456);
//access each object using for-in loop
for (var item in pass) {
    console.log(item); //key -> all field name and method name
    //to access value
    var value = item;
    console.log(pass[value]);
}
