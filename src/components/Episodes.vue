<template>
  <div class="home">
    <Navigation
      @SortByNameAsc="sortByNameAscending"
      @SortByNameDes="sortByNameDescending"
      @SortBySE="sortBySE"
    />
    <h1>Episodes</h1>
    <div class="elevation" :key="componentKey">
      <SingleEpisode v-for="(episode, i) in episodes" :key="i" :episode="episode"></SingleEpisode>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import SingleEpisode from "./SingleEpisode";
import {
  ByNameAscending,
  ByNameDescending,
  BySeason,
  ByEpisode
} from "../modules/functions";

const axios = require("axios");
const baseURL = "http://localhost:3000/episodes/";
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
      .get(baseURL)
      .then(response => {
        this.episodes = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    sortByNameAscending() {
      this.episodes.sort(ByNameAscending);
      this.forceRerender();
    },
    sortByNameDescending() {
      this.episodes.sort(ByNameDescending);
      this.forceRerender();
    },
    sortBySE() {
      this.episodes.sort(ByEpisode).sort(BySeason);
      this.forceRerender();
    },
    forceRerender() {
      this.componentKey++;
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
