//prompt will not work in node js backend in terminal,
//so use html, and run in browser the html

const input = prompt("Enter a number:");

if (input !== null) {
  const num = Number(input);

  if (!isNaN(num)) {
    alert(num % 2 === 0 ? "Number is even" : "Number is odd");
  }
}
