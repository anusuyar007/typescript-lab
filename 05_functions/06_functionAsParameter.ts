//function as parameter
//receive function as parameter, then call that received parameter inside function
//Function is a type, u can use any also (using any)
function Helloworld(fun: any) {
  fun();
}

function hey() {
  console.log("hey hi");
}

Helloworld(hey); //jus name of function u need to pass, not hey(), just hey

//-----------------------------------------------------------------------------
//with parameter - () => return type.
// () => return type. ------this is function type
function calculator(fun: (a: number, b: number) => number): void {
  console.log(fun(10, 20)); //here pass the numbers
}

function add(a: number, b: number): number {
  return a + b;
}

calculator(add); //only function name yu shd pass
