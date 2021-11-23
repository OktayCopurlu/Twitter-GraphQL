import { setItem, getItem } from "../../sessionStorage.js";

import { loginService, registerService } from "../services/userService.js";

export default {
  state: {
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
  },
  getters: {},
};
