//Object Destructuring

const person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    const { name, age, city } = person;
    
    console.log(name); // Output: 'John'
    console.log(age); // Output: 30
    console.log(city); // Output: 'New York'