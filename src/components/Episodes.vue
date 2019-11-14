<template>
  <div class="home">
    <Navigation
      @SortByNameAsc="sortByNameAscending"
      @SortByNameDes="sortByNameDescending"
      @SortBySE="sortBySE"
    />
    <h1>Episodes</h1>
    <Search @searchInput="handleSearch($event)"></Search>
    <div class="elevation" :key="componentKey">
      <SingleEpisode
        v-for="(episode, i) in episodes"
        :key="i"
        :episode="episode"
      ></SingleEpisode>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import SingleEpisode from "./SingleEpisode";
import Search from "./Search";
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
      search: null,
      episodes: [],
      componentKey: 0
    };
  },
  components: { SingleEpisode, Navigation, Search },
  created() {
    this.axiosCall();
  },
  methods: {
    axiosCall() {
      axios
        .get(baseURL)
        .then(response => {
          this.episodes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
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
    handleSearch(searchTerm) {
      this.episodes = this.episodes.filter(episode =>
        episode.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      searchTerm.length < 1 ? this.axiosCall() : "";
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
.autocomplete {
  width: 250px;
  margin: 0 auto;
}
</style>
