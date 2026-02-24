var input = prompt("Enter a number:");
if (input !== null) {
    var num = Number(input);
    if (!isNaN(num)) {
        alert(num % 2 === 0 ? "Number is even" : "Number is odd");
    }
}
