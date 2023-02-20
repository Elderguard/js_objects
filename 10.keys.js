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

const objectKeys = Object.keys(client);

console.log(objectKeys);

if (!objectKeys.includes('address')) {
    console.error("Error. It is necessary to have a registered address");
}
