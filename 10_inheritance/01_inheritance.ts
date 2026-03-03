class BMW {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  commonEngineFunc() {
    console.log("Common func");
  }

  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

class ThreeSeries extends BMW {
  cruiseControlEnabled: boolean;

  constructor(
    make: string,
    model: string,
    year: string,
    cruiseControlEnabled: boolean,
  ) {
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
  }

  //child method
  cruiseControl() {
    this.cruiseControlEnabled = true;
    console.log("crusing");
  }

  //display
  display() {
    console.log(
      this.make +
        " " +
        this.model +
        " " +
        this.year +
        " " +
        this.cruiseControlEnabled,
    );
  }
}

class FiveSeries extends BMW {
  parkingAssistEnabled: boolean;

  constructor(
    make: string,
    model: string,
    year: string,
    parkingAssistEnabled: boolean,
  ) {
    super(make, model, year);
    this.parkingAssistEnabled = parkingAssistEnabled;
  }

  //child method
  parkingAssist() {
    this.parkingAssistEnabled = true;
    console.log("parked");
  }

  //display
  display() {
    console.log(
      this.make +
        " " +
        this.model +
        " " +
        this.year +
        " " +
        this.parkingAssistEnabled,
    );
  }
}

//-------------------------------------------------------------------
//create object
var threeSeries = new ThreeSeries("BMW", "328i", "2018", false);
console.log("Three series: ");
threeSeries.display();
//accesssing parent class method from child class object
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();
console.log("");
//-------------------------------------------------------------------
var fiveSeries = new FiveSeries("BMW", "535", "2018", false);
console.log("Five series: ");
fiveSeries.display();
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();
console.log("");

//---------------------------------------------------------------------
