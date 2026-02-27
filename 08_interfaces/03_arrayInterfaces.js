var studentName = ["abc", "bcd", "cde"]; //yu cant assign other type data.
//to retrieve use for-of loop
for (var _i = 0, _a = studentName; _i < _a.length; _i++) {
    var item = _a[_i];
    //use string array because ts doesnt know it has length property
    console.log(item);
}
//for string index, use flower braces because it is like object internally
var studentScore = {};
//value assigning
studentScore["key1"] = 12;
studentScore["option1"] = 34; //here index is string, so we must provide index string.
//to retrieve use for-in loop
for (var item in studentScore) {
    console.log(studentScore[item]);
}
