//create object which follows interface rules.
//all the properties shd be present
//you can assign different value
//yu cant give new property
var product1 = {
    id: 123,
    name: "Iphone",
    description: "Its awesome",
    price: 1000,
};
//all object literal, shd follow same rule
var product2 = {
    id: 12,
    name: "Iphone pro",
    description: "nice",
    price: 2000,
};
var item1 = {
    id: 123,
    //name is optional, it is nt mandatory. you can give or ignore
};
var obj = {
    num: 123,
    display: function () {
        console.log(this.num);
    },
};
console.log(obj.num);
obj.display();
