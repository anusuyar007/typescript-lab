interface IFlight {
  //rules defined
  flightNo: number;
  from: string;
  to: string;
  display(): void;
}

class Flight implements IFlight {
  //include all the property from interface
  //follow interface rules
  flightNo: number;
  from: string;
  to: string;
  //include class property
  flightTime: string;

  //initialize property in constructor
  constructor(flightNo: number, from: string, to: string, flightTime: string) {
    this.flightNo = flightNo;
    this.from = from;
    this.to = to;
    this.flightTime = flightTime;
  }

  display(): void {
    console.log(
      this.flightNo + " " + this.from + " " + this.to + " " + this.flightTime,
    );
  }
}

var flight = new Flight(123, "Austin", "Denver", "7am");
flight.display();
