const { User, Bid, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


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
   
  },
};

module.exports = resolvers;


