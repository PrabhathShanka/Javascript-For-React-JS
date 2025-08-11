//create function declaration
function printName() {
  console.log("Hello World from function declaration");
}

//call function
printName();

//create function expression
const printName2 = function () {
  console.log("Hello World from function expression");
};

//call function
printName2();

//arrow function
const printName3 = () => {
  console.log("Hello World from arrow function");
};

//call function
printName3();

//explicit return
const printName4 = () => {
    return 2+2;
}

//inplicit return
const printName5 = () => 2+2;

const results = printName4();
console.log(results); 
