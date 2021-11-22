import { gql } from "apollo-boost";

export const REGISTER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      username
      _id
    }
  }
`;
export const LOGIN = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      username
      _id
    }
  }
`;

export const GET_ALL_TWEETS = gql`
  query {
    getTweets {
      _id
      text
      title
      username
      createdAt
      likes
      images
    }
  }
`;
export const CREATE_TWEET = gql`
  mutation ($user: ID!, $username: String!, $text: String!, $title: String!) {
    createTweet(user: $user, username: $username, text: $text, title: $title) {
      text
      title
      _id
    }
  }
`;

export const GET_USER_TWEETS = gql`
  query ($user: ID!) {
    getUserTweets(user: $user) {
      _id
      text
      title
      username
      createdAt
      likes
      images
    }
  }
`;
export const ADD_LIKE_TWEET = gql`
  mutation ($id: ID!, $username: String!) {
    addLike(_id: $id, username: $username) {
      likes
      likesTweet {
        _id
      }
    }
  }
`;
export const UN_LIKE_TWEET = gql`
  mutation ($id: ID!, $username: String!) {
    unLike(_id: $id, username: $username) {
      likes
      likesTweet {
        _id
      }
    }
  }
`;
export const GET_USER_LIKED_TWEETS = gql`
  query ($_id: ID!) {
    getUserLikedTweets(_id: $_id) {
      _id
      text
      title
      username
      createdAt
      likes
      images
    }
  }
`;
