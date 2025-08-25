// let name = "shanka";
// let age = 20;

// function printData() {
//   console.log(`my name is ${name} and my age is ${age}`);
// }

// printData();

//object and classes

//object

//object literal notation

const customer = {
  name: "shanka",
  age: 20,
  address: "colombo",
  status: true,
  salary: 20000,
  contacts: ["0771234567", "0771234568"],
  greet: function () {
    console.log("hello");
  },
};

console.log(customer.greet());

//constructor function

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const student = new Student("shanka", 20);
console.log(student);

//classes

class Perant {
  constructor(name, age) {
    this.name = name; //instance variable  onama thanaka idan accsess karanna puluwan
    this.age = age;
  }
  getData() {
    console.log("Hello");
  }
}

const perant = new Perant("shanka", 20);
console.log(perant);

//privet and public and protected variable

class Customer1 {
  #name; //privet
  age; //public
  _address; //protected
  constructor(name, age, address) {
    this.#name = name;
    this.age = age;
    this._address = address;
  }
  getName() {
    return this.#name;
  }
}

const customer1 = new Customer1("shanka", 20, "colombo");
console.log(customer1);
