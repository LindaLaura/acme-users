const {users, userMap} = require('./data');
const render = require('./render')
const userList = document.querySelector('#user-list');


let curr = window.location.hash.slice(1)*1;


render({userList, users, userMap, curr});

window.addEventListener('hashchange', () =>{
     curr = window.location.hash.slice(1)*1;
    render({userList, users, userMap, curr});
})