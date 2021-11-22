import router from "../../router";
import { LOGIN, REGISTER } from "../request";
import { defaultClient as apolloClient } from "../../main.js";

export function registerService(commit, payload) {
  apolloClient
    .mutate({
      mutation: REGISTER,
      variables: payload,
    })
    .then(({ data }) => commit("setUserInfo", data.createUser))
    .then(() => router.go())
    .catch((error) => console.log("error", error));
}

export function loginService(commit, payload) {
  apolloClient
    .mutate({
      mutation: LOGIN,
      variables: payload,
    })
    .then(({ data }) => commit("setUserInfo", data.login))
    .then(() => router.go())
    .catch((error) => console.log("error", error));
}
