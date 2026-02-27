//while calling, need not to pass all parameter

//if yu use question mark, then it is optional
function display(id?: number, name?: string, role?: string) {
  console.log("id", id);
  console.log("name", name);
  if (role != undefined) {
    console.log("role", role);
  }
}

//while callling, need not to pass all
//but you can skip all three or last two or last one
//but u cant call first and last
display(1, "world");

//------------------------------------------------------------------
//------------------------------------------------------------------
//use "object parameter", to pass specific parameter
//? means not required to pass while calling, its optional

function displayUser(userInfo: { id?: number; name?: string; role?: string }) {
  if (userInfo.id != undefined) {
    console.log(userInfo.id);
  }
  if (userInfo.name != undefined) {
    console.log(userInfo.name);
  }
  if (userInfo.role != undefined) {
    console.log(userInfo.role);
  }
}
//only specific parameter is called
//remaining values not passed,
// then you need to check undefined condition, so that it wont be displayed.
displayUser({ id: 1, role: "dev" }); //use flower braces
