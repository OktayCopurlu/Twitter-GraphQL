import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
const serverURL = "http://localhost:4000/graphql";
// const serverURL ="https://twitter-server-graphql.hserokuapp.com/graphql";
export const defaultClient = new ApolloClient({
  uri: serverURL,
});

const apolloProvider = new VueApollo({ defaultClient });

createApp(App).use(store).use(router).use(apolloProvider).mount("#app");
