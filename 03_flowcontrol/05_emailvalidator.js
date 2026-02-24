//check whether email contains @ and .
var email = "test@test.com";
//if character is there, it will return index else -1
// we are storing in number type, the returned value.
var atposition = email.indexOf("@");
var dotposition = email.indexOf(".");
if (atposition == -1 || dotposition == -1) {
    //use backtick, so that email can be used inside with $
    console.log("Invalid email ".concat(email));
}
else {
    console.log("Email is Valid");
}
