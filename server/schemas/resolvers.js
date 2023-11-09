const { User, Bid, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { PRODUCT_BID_INCREASE_AMOUNT } = require('../utils/constants');

const resolvers = {
  Query: {
    async users(parent, args, contextValue, info) {
      return await User.find({});
    },
    async user(parent,{username}, contextValue, info) {
      const user = await User.findOne({username})
      console.log(user)
      return user
    },
    async me(parent,args, contextValue, info) {
      const users = await User.find({})
      return users[0]
    },
    async products(parent,args, contextValue, info) {
      const products = await Product.find({})
      return products
    },
    async product(parent,{productId}, contextValue, info) {
      const product = await Product.findOne({productId})
      console.log(product)
      return product
    },
    async bids(parent,args, contextValue, info) {
      const bids = await Bid.find({})
      console.log(bids)
      return bids
      //Argument may need to be user?
    },
    async bid(parent,{bidId}, contextValue, info) {
      const bid = await Product.findOne({bidId})
      console.log(bid)
      return bid
    },

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("GETTING SIGNUP/ADD USER REQUEST:", username, email, password);
      const user = await User.create({ username, email, password });
      console.log("USER CREATED:", user);
      const token = signToken(user);
      console.log("TOKEN CREATED:", token);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    createBid: async (parent, {productId, userId}) =>{
      const currentProduct = await Product.findById(productId);
      const newPrice = currentProduct.price + PRODUCT_BID_INCREASE_AMOUNT;
      const bid = await Bid.create({amount: newPrice, productId, userId});

      //Take current Product Amount and then +5 || +10 to updated Product Amount 
      console.log("Bid CREATED:", bid);

      await Product.findOneAndUpdate(
        { _id: productId },
        { price: newPrice }
      );
      
      return bid;
    },
    // 
  },
};

module.exports = resolvers;


