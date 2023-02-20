const clients = require('./clients.json');

// function find(array, key, value){
//     return array.find(item => item[key] === value);
// }

// const foundName = find(clients, 'name', 'Kirby');
// const foundPhone = find(clients, 'phone', '1918820860');

// console.log(foundName);
// console.log(foundPhone); //undefined
//The condition we used here asks if the value is strictly equal === to the registered value.
//The registered value has more than one item to it, therefore it's not ===

function find(array, key, value){
    return array.find(item => item[key].includes(value));
}

const foundName = find(clients, 'name', 'Kirby');
const foundPhone = find(clients, 'phone', '1918820860');

console.log(foundName);
console.log(foundPhone);
