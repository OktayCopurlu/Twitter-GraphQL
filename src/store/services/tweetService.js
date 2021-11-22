import {
  CREATE_TWEET,
  GET_ALL_TWEETS,
  GET_USER_TWEETS,
  ADD_LIKE_TWEET,
  UN_LIKE_TWEET,
  GET_USER_LIKED_TWEETS,
} from "../request.js";
import { defaultClient as apolloClient } from "../../main.js";
import router from "../../router/index.js";
import store from "../index.js";

export function getTweetService(commit) {
  return apolloClient
    .query({
      query: GET_ALL_TWEETS,
      fetchPolicy: "network-only",
    })
    .then((tweets) =>
      tweets.data.getTweets.sort((a, b) => b.createdAt - a.createdAt)
    )
    .then((tweets) => commit("setTweets", tweets))
    .catch((error) => console.log("error", error));
}
export function postTweetService(payload) {
  apolloClient
    .mutate({
      mutation: CREATE_TWEET,
      variables: payload,
    })
    .then(() => {
      router.push("/twitter");
    })
    .catch((error) => console.log("error", error));
}

export function getUserTweetService(commit, payload) {
  apolloClient
    .query({
      query: GET_USER_TWEETS,
      variables: payload,
      fetchPolicy: "network-only",
    })
    .then((tweets) =>
      tweets.data.getUserTweets.sort((a, b) => b.createdAt - a.createdAt)
    )
    .then((tweets) => commit("setTweets", tweets))
    .catch((error) => console.log("error", error));
}

export function addLike(payload) {
  apolloClient
    .mutate({
      mutation: ADD_LIKE_TWEET,
      variables: payload,
    })
    .then(() => console.log("like was added"))
    .then(() => store.dispatch("getTweets"))
    .catch((error) => console.log("error", error));
}
export function unLike(payload) {
  apolloClient
    .mutate({
      mutation: UN_LIKE_TWEET,
      variables: payload,
    })
    .then(() => console.log("like was removed"))
    .then(() => store.dispatch("getTweets"))
    .catch((error) => console.log("error", error))
}
export function getUserLikedTweets(commit, payload) {
  apolloClient
    .query({
      query: GET_USER_LIKED_TWEETS,
      variables: payload,
      fetchPolicy: "network-only",
    })
    .then((tweets) =>
    tweets.data.getUserLikedTweets.sort((a, b) => b.createdAt - a.createdAt)
    )
    .then((tweets) => commit("setUserLikedTweets", tweets))
    .catch((error) => console.log("error", error));
}
