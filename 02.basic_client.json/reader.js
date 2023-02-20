const data = require('./client.json');

console.log(data);
console.log(typeof data);

//you can also transform data into strings through the JSON file
const clientToString = JSON.stringify(data);

console.log(clientToString);
console.log(typeof clientToString);

console.log(clientToString.name); //undefined

//you can transform the data into object once again with parse
const clientObject = JSON.parse(clientToString);

console.log(clientObject);