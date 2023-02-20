const person = {
    name: 'Luma',
    occupation: 'Engineer',
};

console.log(person.name);

console.log(person.phone);
// it is okay to add a property after the creation
person.phone = '11 222333444';

console.log(person.phone);

person.name = 'Luma Silva';

console.log(person);

// If you try to attribute a new entire value to the const previously declared, it won't let you
// const newPerson = {
//     name: 'Pedro',
// }

// person = newPerson;
