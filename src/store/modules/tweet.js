import {
  addLike,
  getTweetService,
  getUserLikedTweets,
  getUserTweetService,
  postTweetService,
  unLike,
} from "../services/tweetService.js";

export default {
  state: {
    tweets: [],
    userLikedTweets: [],
  },
  mutations: {
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
}
