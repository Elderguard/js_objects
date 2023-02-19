const client = {
    name: 'Joao',
    age: 24,
    email: 'joao@company.com',
    phone: ['1155555550', '1144444440'],
    balance: 200,
    executePayment: function (value) {
        if (value > this.balance) {
            console.log("Insuficient value");
        }
        else {
            this.balance -= value;
            console.log(`Payment executed. New balance: ${this.balance}`);
        }
    },
};

client.executePayment(25);