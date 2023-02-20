const client = {
    name: 'Andre',
    age: 32,
    idNumber: '1122233345',
    email: 'andre@domain.com'
}

console.log(`The name of the client is ${client.name} and this client's age is ${client.age}`);

console.log(`The first 3 digits of this client's id number is ${client.idNumber.substring(0,3)}`);
