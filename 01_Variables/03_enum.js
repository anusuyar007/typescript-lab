//default index
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); //index 0   -> 0
console.log(Gender.Female); //index 1 -> 1
console.log(Gender[0]); //actual given constant -> Male
console.log(Gender[1]); //actual given constant -> Female
//-----------------------------------------------------------------------
//specific index(you can assign index values)
var Weekends;
(function (Weekends) {
    Weekends[Weekends["Saturday"] = 6] = "Saturday";
    Weekends[Weekends["Sunday"] = 7] = "Sunday";
})(Weekends || (Weekends = {}));
console.log(Weekends.Saturday); //index 6 -> 6
console.log(Weekends.Sunday); //index 7   -> 7
console.log(Weekends[6]); //actual given constant -> Saturday
console.log(Weekends[7]); //actual given constant -> Sunday
