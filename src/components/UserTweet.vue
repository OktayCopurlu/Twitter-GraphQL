<template>
  <div>
    <ul v-if="tweets.length > 0">
      <h3>These are my tweets</h3>

      <li v-for="tweet in tweets" :key="tweet">
        <div>
          <strong>{{ tweet.title }}</strong>
          <span>{{ tweet.creator }}</span>
        </div>
        <p class="text">{{ tweet.text }}</p>
      </li>
    </ul>
    <h3 v-else>You have no tweets</h3>
  </div>
</template>

<script>
export default {
  beforeMount() {
    const user = this.$store.state.userId;
    this.$store.dispatch("getUserTweets", { user });
  },
  computed: {
    tweets() {
      const tweets = this.$store.state.tweets;
      return tweets;
    },
  },
};
</script>

<style lang="sass" scoped>
$tablet: 768px

ul
  width: 30rem
  margin: auto
  @media (max-width: $tablet)
    width: 100%
    margin: 0
    padding: 0
li
  list-style: none
  margin-bottom: 1rem
  div
    display: flex
    justify-content: space-between
    padding: 1rem 2rem
    background-color: LightGray
.text
  text-align: start
  padding: 2rem
  background-color: CadetBlue
  margin: 0
  color: white
</style>