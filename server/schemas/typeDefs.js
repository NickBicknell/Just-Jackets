const { gql } = require('apollo-server');

const typeDefs = gql`
type Bid {
  bidId: ID
  amount: Float
  createdAt: String
  product: Product
  user: User
}

type User {
  userId: ID
  username: String
  email: String
  password: String
  address: String
  bids: [Bid]
}

type Product {
  productId: ID
  name: String
  brand: String
  size: String
  createdAt: String
}


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
