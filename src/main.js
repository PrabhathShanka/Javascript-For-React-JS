// Array Destructuring
const fruits = ['apple', 'banana', 'orange'];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);
console.log(thirdFruit);

// Object Destructuring
// const person = { name: 'John', age: 30, city: 'New York' };
// const { name, age, city } = person;
// console.log(name, age, city);

// Function Destructuring
const getPerson = () => ({ name: 'John', age: 30, city: 'New York' });
const { name, age, city } = getPerson();
console.log(name, age, city);