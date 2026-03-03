class BMW {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  commonEngineFunc(temp: string) {
    console.log("Common func " + temp);
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

  //for overriding, parameter and function name, return type shd match
  //else it will be considered new method and not overridden method
  commonEngineFunc(temp: string) {
    console.log("Common func " + temp);
  }

  start() {
    console.log("Button Start");
  }

  stop() {
    console.log("Button Stop");
  }
}

//-------------------------------------------------------------------
//create object
var threeSeries = new ThreeSeries("BMW", "328i", "2018", false);
//override
threeSeries.commonEngineFunc("dump");
threeSeries.start();
threeSeries.stop();
//-------------------------------------------------------------------
