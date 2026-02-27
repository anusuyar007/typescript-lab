function outer() {
    var count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
var counter = outer(); // executes outer and returns inner function with outer variable.
counter(); //each time inner function called, same count is used and updated
counter();
counter();
