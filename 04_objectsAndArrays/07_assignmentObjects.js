var Employee = {
    id: 123,
    firstName: "potato",
    salary: 321,
};
for (var key in Employee) {
    console.log(key);
    //console.log(Employee[key]);// this will nt work, thats why we do below step to get value
    var EmployeeValue = key; //get key and store in EmployeeValue
    //console.log(EmployeeValue);//single key
    console.log(Employee[EmployeeValue]); //value of single key
}
//destructure
var id = Employee.id, firstName = Employee.firstName, salary = Employee.salary;
console.log(id + " " + firstName + " " + salary);
