var num1 = 100;
console.log(num1);

let num2 = 200;
console.log(num2);

const num3 = 300;
console.log(num3);

//data type (string, number, boolean, null, undefined, object)

//primitive data types (string, number, boolean)
//non-primitive data types (null, undefined, object)

let num = 100;
num = 200;
num = -20;
num = -15.36;
console.log(num);

let name = "John";
name
console.log(name);

let isMarried = true;
console.log(isMarried);

//null - blank value, is empty value
let age = null;

//undefined - declared but no assigned value
let job= undefined;

//or

let salary;

console.log(salary);
console.log(job);


//casting (implicit casting)
let num4 = 100;
let num5 = "100";
console.log(num4 + num5);

//explicit casting
let num6 = 100;
let num7 = "100";
console.log(num6 + Number(num7));

//--------------------------------------------------------

//concatenation
let fistName = "John";
let lastName = "Doe";
let fullName = fistName + " " + lastName;
console.log(fullName);

//template literal
let myNAme = `${fistName} ${lastName}`;
console.log(myNAme);


//typeOF Vs instanceOf
let num8 = 100;
console.log(typeof num8);
console.log(num8 instanceof Number); // why this is false? because it is a primitive data type

//NAN (Not a Number)
console.log(isNaN('nimal'));
console.log(isNaN(100));

//if condition
let num9 = 100;
if(num9 > 10){
    console.log('num9 is greater than 10');
}else{
    console.log('num9 is less than 10');
}


