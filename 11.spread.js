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

function callClient(commercialPhone, homePhone){
    console.log(`Calling ${commercialPhone}`);
    console.log(`Calling ${homePhone}`);
}

// callClient(client.phone[0], client.phone[1]);
// the code can be replaced by
callClient(...client.phone);

// const package = {
//     receiver: client.name,
//     streetAddress: client.address[0].streets,
//     number: client.address[0].number,
// }
// to make it more efficient, spread can be used here too

const package = {
    receiver: client.name,
    ...client.address[0],
}

console.log(package);