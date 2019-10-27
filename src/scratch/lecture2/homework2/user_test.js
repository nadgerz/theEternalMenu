const User = require('./user');

let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
let user3 = new User('Chris', 'Chris@mail.com', 'qwertz');

console.log( user1, user2, user3 );