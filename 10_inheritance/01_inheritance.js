var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common func");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    //child method
    ThreeSeries.prototype.cruiseControl = function () {
        this.cruiseControlEnabled = true;
        console.log("crusing");
    };
    //display
    ThreeSeries.prototype.display = function () {
        console.log(this.make +
            " " +
            this.model +
            " " +
            this.year +
            " " +
            this.cruiseControlEnabled);
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    //child method
    FiveSeries.prototype.parkingAssist = function () {
        this.parkingAssistEnabled = true;
        console.log("parked");
    };
    //display
    FiveSeries.prototype.display = function () {
        console.log(this.make +
            " " +
            this.model +
            " " +
            this.year +
            " " +
            this.parkingAssistEnabled);
    };
    return FiveSeries;
}(BMW));
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
