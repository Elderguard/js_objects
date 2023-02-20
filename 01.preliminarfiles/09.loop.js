const client = {
    name: 'Joao',
    age: 24,
    email: 'joao@company.com',
    phone: ['1155555550', '1144444440']
};

client.address = [
    {
        streets: 'Joseph Climber Street',
        number: 1337,
        apartment: true,
        complement: 'ap 934',
    }
];

client.address.push(
    {
        streets: 'Joseph Ladder Street',
        number: 404,
        apartment: false,
    }
);

// for (let key in client) {
//     console.log(`The key ${key} has the value ${client[key]}`);
// }
//Console will this way show "The key address has the value [object Object],[object Object]"

for (let key in client) {
    let type = typeof client[key];
    if (type !== 'object' && type !== 'function') {
        console.log(`The key ${key} has the value ${client[key]}`);
    }  
}