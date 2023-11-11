const typeDefs =`
type Bid {
  _id: ID
  amount: Float
  createdAt: String
  product: Product
  user: User
}

type User {
  _id: ID
  username: String
  email: String
  password: String
  address: String
  bids: [Bid]
}

type Product {
  _id: ID
  name: String
  brand: String
  price: Float
  size: String
  image: String
  createdAt: String
  expiresAt: String
  bids: [Bid]
}


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    products: [Product]
    product(productId: ID): Product
    bids: [Bid]
    bid(bidId: ID): Bid
    }
  



  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createBid(productId: ID!, userId: ID!): Bid
  }
`;

module.exports = typeDefs;


