import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import PostTweet from "../components/PostTweet.vue";
import Twitter from "../components/Twitter.vue";
import Home from "../components/Home.vue";
import UserPage from "../components/UserPage.vue";
import UserLikedTweet from "../components/UserLikedTweet.vue";
import UserTweet from "../components/UserTweet.vue";
import { isAuth } from "../auth";
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/twitter",
    name: "Twitter",
    component: Twitter,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/post-tweet",
    name: "PostTweet",
    component: PostTweet,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-page",
    name: "UserPage",
    component: UserPage,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/user-page/user-liked-tweets",
        name: "UserLikedTweets",
        component: UserLikedTweet,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/user-page/user-tweets",
        name: "UserTweet",
        component: UserTweet,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuth()) next("/login");
  else if (!to.meta.requiresAuth && isAuth()) next("/twitter");
  else next();
});
export default router;
