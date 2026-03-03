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
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log("Scrolling");
    };
    TouchScreenLaptop.prototype.click = function () {
        console.log("Clicking");
    };
    return TouchScreenLaptop;
}());
var HPLaptop = /** @class */ (function (_super) {
    __extends(HPLaptop, _super);
    function HPLaptop(ram, hd, processor, selfRecovery) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.selfRecovery = selfRecovery;
        return _this;
    }
    HPLaptop.prototype.scroll = function () {
        console.log("Scrolling inside HPLaptop");
    };
    HPLaptop.prototype.display = function () {
        console.log(this.ram + " " + this.hd + " " + this.processor + " " + this.selfRecovery);
    };
    return HPLaptop;
}(TouchScreenLaptop));
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop(ram, hd, processor, MobileAccess) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.MobileAccess = MobileAccess;
        return _this;
    }
    DellLaptop.prototype.scroll = function () {
        console.log("Scrolling inside DellLaptop");
    };
    DellLaptop.prototype.display = function () {
        //if parenthesis goes to next line, then use comma after mobileAccess
        console.log(this.ram + " " + this.hd + " " + this.processor + " " + this.MobileAccess);
    };
    return DellLaptop;
}(TouchScreenLaptop));
var hpLaptop = new HPLaptop("12gb", "HDD", "core i7", false);
hpLaptop.display();
hpLaptop.scroll();
console.log("");
var dellLaptop = new DellLaptop("16gb", "HDD", "core i9", true);
dellLaptop.display();
dellLaptop.scroll();
