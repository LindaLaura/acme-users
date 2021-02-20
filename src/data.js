const faker = require ('faker');

const users = new Array(4).fill('').map(_ => faker.helpers.userCard());

const userMap = users.reduce((accum, user) => {
    accum[user.name] = new Array(1).fill('-').map(_ => user);
    return accum; 
}, {});


module.exports = {
users,
userMap
}