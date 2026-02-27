//Numeric based array interfaces.
interface StudentName {
  //yu can use index or i or ind -> anything yu can use
  [index: number]: string; //index shd be number and data shd be string
}

var studentName: StudentName = ["abc", "bcd", "cde"]; //yu cant assign other type data.

//to retrieve use for-of loop
for (var item of studentName as string[]) {
  //use string array because ts doesnt know it has length property
  console.log(item);
}

//--------------------------------------------------------------------------
//String based array interfaces.
interface StudentScore {
  [index: string]: number; //data type can be anything
}
//for string index, use flower braces because it is like object internally
var studentScore: StudentScore = {};
//value assigning
studentScore["key1"] = 12;
studentScore["option1"] = 34; //here index is string, so we must provide index string.

//to retrieve use for-in loop
for (var item in studentScore) {
  console.log(studentScore[item]);
}
