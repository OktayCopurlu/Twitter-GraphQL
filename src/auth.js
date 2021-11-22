import { getItem } from "./sessionStorage.js";

export function isAuth() {
  return getItem("token") ? true : false;
}
