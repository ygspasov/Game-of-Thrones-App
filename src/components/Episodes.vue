<template>
  <div class="home">
    <Navigation @SortByNameAsc="sortByNameAscending" @SortByNameDes="sortByNameDescending" />
    <h1>Episodes</h1>
    <div class="elevation" :key="componentKey">
      <SingleEpisode v-for="(episode, i) in episodes" :key="i" :episode="episode"></SingleEpisode>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import SingleEpisode from "./SingleEpisode";

const axios = require("axios");
export default {
  data() {
    return {
      episodes: [],
      componentKey: 0
    };
  },
  components: { SingleEpisode, Navigation },
  created() {
    axios
      .get("http://localhost:3000/episodes")
      .then(response => {
        this.episodes = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    ByNameAscending(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    },
    ByNameDescending(a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    },
    sortByNameAscending() {
      this.episodes = this.episodes.sort(this.ByNameAscending);
      this.forceRerender();
    },
    sortByNameDescending() {
      this.episodes = this.episodes.sort(this.ByNameDescending);
      this.forceRerender();
    },
    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>

<style>
.elevation {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.home .md-card-media img {
  width: 100%;
  height: 134px;
}
</style>
