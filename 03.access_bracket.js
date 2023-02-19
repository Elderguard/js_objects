const client = {
    name: 'Andre',
    age: 32,
    idNumber: '1122233345',
    email: 'andre@domain.com'
}
//you can also access the properties using brackets
console.log(`The name of the client is ${client['name']} and this client's age is ${client['age']}`);

const keys = ['name', 'age', 'id number', 'email', 'height'];

keys.forEach((key)=> {
    console.log(`The key ${key} has the value ${client[key]}`)
});