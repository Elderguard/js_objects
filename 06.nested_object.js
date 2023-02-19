//nested object is when an object is inside another object
const client = {
    name: 'Joao',
    age: 24,
    email: 'joao@company.com',
    phone: ['1155555550', '1144444440']
}

client.address = {
    streets: 'Joseph Climber Street',
    number: 1337,
    apartment: true,
    complement: 'ap 934',
}

console.log(client);
