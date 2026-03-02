var Flight = /** @class */ (function () {
    //initialize property in constructor
    function Flight(flightNo, from, to, flightTime) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.flightTime = flightTime;
    }
    Flight.prototype.display = function () {
        console.log(this.flightNo + " " + this.from + " " + this.to + " " + this.flightTime);
    };
    return Flight;
}());
var flight = new Flight(123, "Austin", "Denver", "7am");
flight.display();
