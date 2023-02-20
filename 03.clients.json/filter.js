//Some clients are listed as in apartments but didn't indicate the complement
//This filter has the objective of finding those clients

const clients = require('./clients.json');

function filterApartmentLackingComplement(clients) {
    return clients.filter((client)=> {
                        //conditional  === true when omitted
                                            //! = negative condition
        return(client.address.apartment  && !client.address.hasOwnProperty('complement')
        );
    })
}

const filtered = filterApartmentLackingComplement(clients);

console.log(filtered);