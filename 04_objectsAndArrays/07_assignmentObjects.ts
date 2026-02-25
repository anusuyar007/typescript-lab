var Employee = {
  id: 123,
  empName: "potato",
  salary: 321,
};

for (let key in Employee) {
  console.log(key);

  //console.log(Employee[key]);// this will nt work, thats why we do below step to get value

  let EmployeeValue = key as keyof typeof Employee; //get key and store in EmployeeValue
  //console.log(EmployeeValue);//single key
  console.log(Employee[EmployeeValue]); //value of single key
}

//destructure
var { id, empName, salary } = Employee;
console.log(id + " " + empName + " " + salary);
