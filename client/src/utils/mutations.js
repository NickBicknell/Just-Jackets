import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_BID = gql`
  mutation createBid($productId: ID!, $userId: ID!) {
    createBid(productId: $productId, userId: $userId) {
        _id
        amount
        createdAt
        product {
          name
        }
        user {
          username
        }
    }
  }
`;
