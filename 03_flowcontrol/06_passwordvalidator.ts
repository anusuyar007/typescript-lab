var password: string = "Test@123";
//if first letter is capital, then valid else not valid passowrd

if (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) {
  console.log("Valid password");
} else {
  //multiple ways to print the value
  console.log("Invalid password" + password); //using +
  console.log(`Invalid password ${password}`); //using backtick and within that use this ${}
}
