const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
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
