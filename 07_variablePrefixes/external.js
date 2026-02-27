// function displayMessage(str) {
//   let newStr = " World";
//   console.log(str + newStr);
// }

//above code will not work
//so use global

global.displayMessage = function (str) {
  let newStr = " World";
  console.log(str + newStr);
};

export function dispMsg(str) {
  console.log(str);
}
