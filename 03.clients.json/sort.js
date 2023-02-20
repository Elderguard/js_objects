const clients = require('./clients.json');

function sort(array, property){
    const result = array.sort((a,b) => {
        if (a[property]<b[property]){
            return -1;
        }
        if (a[property]>b[property]){
            return 1;
        }
        return 0;
    })
    return result;
}

const sortByName = sort(clients,'name');

console.log(sortByName);