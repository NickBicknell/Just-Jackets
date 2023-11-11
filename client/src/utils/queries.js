import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bids {
        _id
        amount
        createdAt
        product {
          name
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      brand
      size
      image
      createdAt
    }
  }
`;


export const QUERY_BIDS = gql`
  query getBids {
    bids {
      _id
      amount
      product
      user
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
query getSingleProduct($productId: ID!) {
  product(productId: $productId) {
    _id
    name
    brand
    size
    image
    price
    createdAt
    expiresAt
    bids {
      _id
      amount
      createdAt
      user {
        _id
        username
      }
    }
  }
}
`;

export const QUERY_SINGLE_BID = gql`
  query getSingleBid($bidId: ID!) {
    bid(bidId: $bidId) {
      _id
      amount
      product
      user
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bids {
        _id
        product
        createdAt
        amount
      }
    }
  }
`;
