interface Ibook {
  title: string;
  isbn: string;
  description: string;
  price: number;
}

var obj: Ibook = {
  title: "Haunted",
  isbn: "abc",
  description: "Horror story",
  price: 123,
};

console.log(obj);
