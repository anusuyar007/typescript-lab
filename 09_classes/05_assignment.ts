//organizer class
class Organizer {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  display() {
    console.log(this.id + " " + this.name);
  }
}

//event class
class EventClass {
  id: number;
  name: string;
  description: string;
  starttime: string;
  endtime: string;

  constructor(
    id: number,
    name: string,
    description: string,
    starttime: string,
    endtime: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.starttime = starttime;
    this.endtime = endtime;
  }

  display() {
    console.log(
      this.id +
        " " +
        this.name +
        " " +
        this.description +
        " " +
        this.starttime +
        " " +
        this.endtime,
    );
  }
}

//venue class
class Venue {
  id: number;
  name: string;
  description: string;
  address: string;

  constructor(id: number, name: string, description: string, address: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
  }

  display() {
    console.log(
      this.id + " " + this.name + " " + this.description + " " + this.address,
    );
  }
}

//create objects
var organizer = new Organizer(123, "BOB");
var eventO = new EventClass(
  456,
  "Birthday",
  "Birthday Celebration",
  "7pm",
  "10pm",
);
var venue = new Venue(789, "mall", "Birthday Venue", "INDIA");

//access display method
organizer.display();
eventO.display();
venue.display();
