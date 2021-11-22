<template>
  <div>
    <nav id="nav">
      <router-link to="/user-page/user-tweets">My Tweets</router-link> |
      <router-link to="/user-page/user-liked-tweets">Liked Tweets</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  beforeMount() {
    const user = this.$store.state.userId;
    this.$store.dispatch("getUserTweets", { user });
    const _id = this.$store.state.userId;
    this.$store.dispatch("userLikedTweets", { _id });
  },
  computed: {
    tweets() {
      const tweets = this.$store.state.tweets;
      return tweets;
    },
    userLikeTweets() {
      const tweets = this.$store.state.userLikedTweets;
      return tweets;
    },
  },
};
</script>

<style lang="sass" scoped>
#nav
  padding: 30px 0
  width: 100%

#nav a
  font-weight: bold
  color: #2c3e50
  width: 100%
  text-decoration: none

#nav a:hover
  color: red

#nav a.router-link-exact-active
  color: #42b983
</style>