//function
//simple function
function printData() {
  console.log("name : nimal");
  console.log("address : colombo");
  console.log("TP : 0771234567");
  console.log("email : 5KgM0@example.com");
  console.log("--------------------");
}

printData();
printData();

//function with parameter
function printData(name, address, tp, email) {
  //parameter
  console.log("name : " + name);
  console.log("address : " + address);
  console.log("TP : " + tp);
  console.log("email : " + email);
  console.log("--------------------");
}

printData("nimal", "colombo", "0771234567", "5KgM0@example.com"); //argument
printData("kasun", "matahra", "0771234586,", "J8oOa@example.com");

//default parameter
function printData(name, address, tp, email = "no email") {
  //parameter
  console.log("name : " + name);
  console.log("address : " + address);
  console.log("TP : " + tp);
  console.log("email : " + email);
  console.log("--------------------");
}

printData("nimal", "colombo", "0771234567", "5KgM0@example.com"); //argument
printData("kasun", "matahra", "0771234586");

//function expression
const sum = function (num1, num2) {
  console.log(num1 + num2);
};

sum(10, 20);

//arrow function
const sum2 = (num1, num2) => {
  let total = num1 + num2;
  return total;
};

let answer = sum2(120, 240);
console.log(answer);

//or

const sum3 = (num1, num2) => num1 + num2;

console.log(sum3(20, 240));

//callback function

let serverData;

function getData(printData1) {
  setTimeout(() => {
    serverData = {
      name: "nimal",
      address: "colombo",
      tp: "0771234567",
      email: "5KgM0@example.com",
    };

    printData1();
  }, 2000);
}

function printData1() {
  console.log(serverData);
  console.log("system end");
}

console.log("system start");
getData(printData1);
