//overload signatures - it shd hv return type
function doubleMe(x: number): void; //overload signature
function doubleMe(x: string): void; //overload signature

//method shd hv return type
function doubleMe(x: any): void {
  if (x && typeof x === "number") {
    console.log(x * 2);
  } else if (x && typeof x === "string") {
    console.log(x + " " + x);
  }
}

doubleMe(10);
doubleMe("Hello");

// doubleMe(10,20); //you will get error, because this overload signature for two parameter
//is not there.

//you can restrict overload type using signature
