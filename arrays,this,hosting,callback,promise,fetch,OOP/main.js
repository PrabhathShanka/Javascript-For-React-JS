//array
//[true,123,23.d,'nimal']
console.log("array");

let number = [100, 200, 300, 400];
console.log(number);
console.log(number[2]);
console.log(number.length);

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

//or

for (const tempNumber of number) {
  console.log(tempNumber);
}

let dataArray = [
  { id: 1, name: "nimal" },
  { id: 2, name: "kasun" },
  { id: 3, name: "kamal" },
  { id: 4, name: "kamal" },
];

console.log(dataArray);
console.log(dataArray[1]);
console.log(dataArray[1].name);

//use find function
let findData = dataArray.find((selectData) => selectData.id == 2);
console.log(findData);

//or

let findData2 = dataArray.find((selectData) => {
  return selectData.id == 3;
});

console.log(findData2);

//pop and push and shift and unshift and spice
let number1 = [100, 200, 300, 400, 500, 54, 65, 34, 24, 54];
console.log(number1);
console.log(number1.pop()); //remove last value
console.log(number1);
console.log(number1.push(500)); //add last value
console.log(number1);
console.log(number1.shift()); //remove first value
console.log(number1);
console.log(number1.unshift(100)); //add first value
console.log(number1);
console.log(number1.splice(2, 3)); //remove and add value
console.log(number1);

//hosting (var,let)
//var
console.log(a); // undefined (not error)
var a = 10;

var a; // hoisted
console.log(a); // undefined
a = 10; // assign

//let

// console.log(b); // ❌ ReferenceError
// let b = 20;

//window vs document
console.log(window.innerHeight);
console.log(document.body);

//this
console.log(this);

let name = "nimal";
let obj = {
  name: "kasun",
  printName: function () {
    console.log(name);
    console.log(this.name);
  },
};

obj.printName();

//server data fetch

//use callback

// let comment;

// function getData(printData) {
//   console.log("system start");

//   let xmlhttpRequest = new XMLHttpRequest();
//   let url = "https://jsonplaceholder.typicode.com/comments";

//   xmlhttpRequest.open("GET", url);

//   xmlhttpRequest.onload = function () {
//     if (xmlhttpRequest.status === 200) {
//       let responseData = JSON.parse(xmlhttpRequest.responseText);
//       comment = responseData;
//       printData();
//     } else {
//       console.log("error", xmlhttpRequest.status);
//     }
//   };

//   xmlhttpRequest.send();

//   console.log("end get data");
// }

// const printData = () => {
//   console.log(comment);
// };

// const loadData = () => {
//   console.log("load data");
//   getData(printData);
//   console.log("system end");
// };

//use promise

// let comment;

// function getData() {
//   return new Promise((resolve, reject) => {
//     console.log("load data");

//     let xmlhttpRequest = new XMLHttpRequest();
//     let url = "https://jsonplaceholder.typicode.com/comments";

//     xmlhttpRequest.open("GET", url);

//     xmlhttpRequest.onload = function () {
//       if (xmlhttpRequest.status === 200) {
//         let responseData = JSON.parse(xmlhttpRequest.responseText);
//         resolve(responseData);
//       } else {
//         reject({ error: "error" });
//       }
//     };

//     xmlhttpRequest.send();
//   });
// }

// const loadData = () => {
//   console.log("system start");
//   getData()
//     .then((response) => {
//       comment = response;
//       console.log(comment);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   console.log("system end");
// };

//use fetch  (fetch is inbuilt function in promises)

let comment;

function getData() {
  let url = "https://jsonplaceholder.typicode.com/comments";

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

const loadData = () => {
  console.log("system start");
  getData()
    .then((response) => {
      comment = response;
      console.log(comment);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("system end");
};

//box show hide use js

// boxStatus = true;
// const box = document.getElementById("box");

// const trigger = () => {
//   if (boxStatus) {
//     box.style.display = "block";
//   } else {
//     box.style.display = "none";
//   }

//   boxStatus = !boxStatus;
// };

// use jquery

const trigger = () => {
  $("#box").toggle(1000);
};

//use fade in fade out

const fadeIn = () => {
  $("#box").fadeIn(1000);
};

const fadeOut = () => {
  $("#box").fadeOut(1000);
};

// use ajax

const loadDataAjax = () => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/comments",
    method: "GET",
    dataType: "json",
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};
