const db = require('./connection');
const { User, Product, Bid } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const products = await Product.insertMany([
    {
      name: 'Mens Blue Old School Bomber Jacket',
      brand: 'Old-Skool',
      image: 'jacket-1.jpg',
      size: 'Medium',
      price: 250,
    },
    {
      name: 'Mens Red Old School Bomber Jacket',
      brand: 'Old-Skool',
      image: 'jacket-2.jpg',
      size: 'Large',
      price: 300,
    },
    {
      name: 'Womans Luxury Leather Aviator Jacket',
      brand: 'Everything Leather',
      image: 'jacket-3.jpg',
      size: 'Small',
      price: 450,
    },
  ]);

  console.log('products seeded');

  await User.create({
    username: 'JohnB',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    username: "Franky",
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
