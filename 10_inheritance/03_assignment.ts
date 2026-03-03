class TouchScreenLaptop {
  ram: string;
  hd: string;
  processor: string;

  constructor(ram: string, hd: string, processor: string) {
    this.ram = ram;
    this.hd = hd;
    this.processor = processor;
  }

  scroll() {
    console.log("Scrolling");
  }

  click() {
    console.log("Clicking");
  }
}

class HPLaptop extends TouchScreenLaptop {
  selfRecovery: boolean;

  constructor(
    ram: string,
    hd: string,
    processor: string,
    selfRecovery: boolean,
  ) {
    super(ram, hd, processor);
    this.selfRecovery = selfRecovery;
  }

  scroll() {
    console.log("Scrolling inside HPLaptop");
  }

  display() {
    console.log(
      this.ram + " " + this.hd + " " + this.processor + " " + this.selfRecovery,
    );
  }
}

class DellLaptop extends TouchScreenLaptop {
  MobileAccess: boolean;

  constructor(
    ram: string,
    hd: string,
    processor: string,
    MobileAccess: boolean,
  ) {
    super(ram, hd, processor);
    this.MobileAccess = MobileAccess;
  }

  scroll() {
    console.log("Scrolling inside DellLaptop");
  }

  display() {
    //if parenthesis goes to next line, then use comma after mobileAccess
    console.log(
      this.ram + " " + this.hd + " " + this.processor + " " + this.MobileAccess,
    );
  }
}

var hpLaptop = new HPLaptop("12gb", "HDD", "core i7", false);
hpLaptop.display();
hpLaptop.scroll();
console.log("");

var dellLaptop = new DellLaptop("16gb", "HDD", "core i9", true);
dellLaptop.display();
dellLaptop.scroll();
