import { createStore } from "vuex";

import tweet from "./modules/tweet";
import user from "./modules/user";
const modules = {
  tweet,
  user,
};
export default createStore({
  modules,
});
