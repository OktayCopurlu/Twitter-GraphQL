<template>
  <div>
    <h3>Create a new Tweet</h3>
    <form @submit.prevent="formHandler">
      <input
        type="text"
        name="title"
        id="title"
        v-model="title"
        required
        maxlength="20"
        placeholder="title"
      />
      <textarea
        placeholder="tweet"
        name="tweet"
        id="tweet"
        required
        v-model="tweet"
        rows="6"
        maxlength="250"
      />
      <button
        :disabled="isDisabled"
        :class="[isDisabled ? '' : 'ready-button', 'button']"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import { getItem } from "../sessionStorage";
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
      tweet: "",
    };
  },
  computed: {
    isDisabled() {
      if (this.title && this.tweet) return false;
      else return true;
    },
  },
  methods: {
    formHandler() {
      const title = this.title;
      const text = this.tweet;
      const user = getItem("id");
      const username = getItem("username");
      this.$store
        .dispatch("postTweet", { title, text, user, username })
        .then(() => {
          this.title = "";
          this.tweet = "";
        });
    },
  },
};
</script>

<style lang="sass" scoped>
$tablet: 768px
form
  display: flex
  flex-direction: column
  width: 30rem
  padding: 2rem
  box-shadow: (1px 1px 5px gray)
  border-radius: 8px
  margin: auto
  background-color: LightGray
  @media (max-width: $tablet)
    width: 100%
    border-radius: 0px
    box-shadow: none
    margin-left: 0
    margin-right: 0
  *
    padding: .5rem
    margin: 0.4rem
    outline: 0
    font-family: ("Times New Roman", Times, serif)
    font-size: 1.2rem
  .button
    background-color: gray
    color: white
    padding: .8rem
    border: 0
  .ready-button
    background-color: green
    transition: all 1s ease
    cursor: pointer
    &:hover
      background-color: limegreen
      transition: all 0.5s linear
</style>