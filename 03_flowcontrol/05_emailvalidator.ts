//check whether email contains @ and .
var email: string = "test@test.com";

//if character is there, it will return index else -1
// we are storing in number type, the returned value.
var atposition: number = email.indexOf("@");
var dotposition: number = email.indexOf(".");

if (atposition == -1 || dotposition == -1) {
  //use backtick, so that email can be used inside with $
  console.log(`Invalid email ${email}`);
} else {
  console.log("Email is Valid");
}
