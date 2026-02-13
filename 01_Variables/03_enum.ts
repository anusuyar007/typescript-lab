//default index
enum Gender {
  Male,
  Female,
}

console.log(Gender.Male); //index 0   -> 0
console.log(Gender.Female); //index 1 -> 1

console.log(Gender[0]); //actual given constant -> Male
console.log(Gender[1]); //actual given constant -> Female

//-----------------------------------------------------------------------
//specific index(you can assign index values)

enum Weekends {
  Saturday = 6,
  Sunday = 7,
}

console.log(Weekends.Saturday); //index 6 -> 6
console.log(Weekends.Sunday); //index 7   -> 7

console.log(Weekends[6]); //actual given constant -> Saturday
console.log(Weekends[7]); //actual given constant -> Sunday
