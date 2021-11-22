import { createStore } from "vuex";
import { setItem, getItem } from "../sessionStorage.js";
import {
  addLike,
  getTweetService,
  getUserLikedTweets,
  getUserTweetService,
  postTweetService,
  unLike,
} from "./services/tweetService.js";
import { loginService, registerService } from "./services/userService.js";

export default createStore({
  state: {
    tweets: [],
    userLikedTweets: [],
    userEmail: getItem("email"),
    userId: getItem("id"),
    token: getItem("token"),
  },
  mutations: {
    setUserInfo(state, { token, username, _id }) {
      setItem("token", token);
      setItem("username", username);
      setItem("id", _id);
    },
    setTweets(state, tweets) {
      state.tweets = tweets;
      return state.tweets;
    },
    addTweet(state, tweet) {
      state.tweets.push(tweet);
    },
    setUserLikedTweets(state, userLikedTweets) {
      state.userLikedTweets = userLikedTweets;
      return state.userLikedTweets;
    },
  },
  actions: {
    login: ({ commit }, payload) => {
      loginService(commit, payload);
    },
    register: ({ commit }, payload) => {
      registerService(commit, payload);
    },
    postTweet: (_, payload) => {
      postTweetService(payload);
    },
    getTweets: ({ commit }) => {
      getTweetService(commit);
    },
    getUserTweets: ({ commit }, payload) => {
      getUserTweetService(commit, payload);
    },
    addLike: (_, payload) => {
      addLike(payload);
    },
    unLike: (_, payload) => {
      unLike(payload);
    },
    userLikedTweets: ({ commit }, payload) => {
      getUserLikedTweets(commit, payload);
    },
  },
  getters: {
    tweets(state) {
      return state.tweets;
    },
    userLikeTweets(state) {
      return state.userLikedTweets;
    },
  },
});
