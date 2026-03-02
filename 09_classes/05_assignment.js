//organizer class
var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return Organizer;
}());
//event class
var EventClass = /** @class */ (function () {
    function EventClass(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    EventClass.prototype.display = function () {
        console.log(this.id +
            " " +
            this.name +
            " " +
            this.description +
            " " +
            this.starttime +
            " " +
            this.endtime);
    };
    return EventClass;
}());
//venue class
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.address);
    };
    return Venue;
}());
//create objects
var organizer = new Organizer(123, "BOB");
var eventO = new EventClass(456, "Birthday", "Birthday Celebration", "7pm", "10pm");
var venue = new Venue(789, "mall", "Birthday Venue", "INDIA");
//access display method
organizer.display();
eventO.display();
venue.display();
