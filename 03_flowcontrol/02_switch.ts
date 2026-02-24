var x: number = 3;

//matched x case will be executed, remaining will be ignored.
//if not matched, then default case will be executed.
switch (x) {
  case 1:
    console.log("Case 1");
    break;

  case 2:
    console.log("Case 2");
    break;

  default:
    console.log("Default");
}
