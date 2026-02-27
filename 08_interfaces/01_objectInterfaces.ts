//object interface
//rules defined in this interface
interface Iproduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

//create object which follows interface rules.
//all the properties shd be present
//you can assign different value
//yu cant give new property
var product1: Iproduct = {
  id: 123,
  name: "Iphone",
  description: "Its awesome",
  price: 1000,
};

//all object literal, shd follow same rule
var product2: Iproduct = {
  id: 12,
  name: "Iphone pro",
  description: "nice",
  price: 2000,
};

//------------------------------------------------------------------------------
//optional property
interface Iitem {
  id: number;
  name?: string;
}

var item1: Iitem = {
  id: 123,
  //name is optional, it is nt mandatory. you can give or ignore
};

//----------------------------------------------------------------------------
//function in interface(in object interface)

interface Ilist {
  num: number;
  display(): void;
}

var obj: Ilist = {
  num: 123,
  display() {
    console.log(this.num);
  },
};
console.log(obj.num);
obj.display(); //if function is nt returning anything, then dont put in console, yu vl get
//undefined.
