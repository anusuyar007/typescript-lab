var myarray: Array<any> = [];

//to push arrow function into array
for (let i = 0; i < 10; i++) {
  //push arrow function one by one into array
  //array.push(():returntype => {}) //inside parenthesis it is arrow function
  myarray.push((): number => {
    return i;
  });
}

//to see each arrow function declaration
for (let i = 0; i < 10; i++) {
  console.log(myarray[i]); //actual function declaration yu cant see,
  //  but it displays function anonymous
}
//to see only the result of each arrow function, then use ()
for (let i = 0; i < 10; i++) {
  console.log(myarray[i]()); //calling arrow function
}
