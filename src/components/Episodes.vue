<template>
  <div class="home">
    <h1>Episodes</h1>
    <div class="elevation">
      <SingleEpisode v-for="(episode,i) in episodes" :key="i" :episode="episode"></SingleEpisode>
    </div>
  </div>
</template>

<script>
import SingleEpisode from "./SingleEpisode";
const axios = require("axios");
export default {
  data() {
    return {
      episodes: []
    };
  },
  components: { SingleEpisode },
  created() {
    axios
      .get("http://localhost:3000/episodes")
      .then(response => {
        console.log(response.data);
        this.episodes = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.elevation {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>