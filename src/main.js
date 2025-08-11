//object

const person = {
    key1: 'value1',
    key2: '250',
    key3: 'true',
    age: 20,
    //arrow function
    sayHello: () => {
        console.log('hello')
    },

    //nexted object
     car: {
        key1: 'value1',
        key2: '250',
        key3: 'true',
        age: 50,
        //arrow function
        sayHello: () => {
            console.log('hello')
        }
    }
}

console.log(person);
console.log(person.car);
console.log(person.car.age);

console.log(person.age);
person.age = 30;
console.log(person.age);

//array
const myArray = [1, "shanka",{name:'prabhath'},true,false];

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[2].name);
console.log(myArray[3]);
console.log(myArray[4]);

//array objects
const myArray1 = [
    {
        name:'prabhath',
        age:20
    },
    {
        name:'prabhath',
        age:20
    },
    {
        name:'prabhath',
        age:20
    }
];

console.log(myArray1);
console.log(myArray1[0]);
console.log(myArray1[0].name);
console.log(myArray1[0].age);




