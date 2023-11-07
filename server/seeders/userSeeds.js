const bcrypt = require('bcrypt');
const User = require('./userSeeds'); // Assuming you've already imported the User model

const seedData = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('password1', 10), 
    address: '123 Main St, City, Country',
    bids: [],
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('password2', 10),
    address: '456 Elm St, Town, Country',
    bids: [ ],
  },
];

