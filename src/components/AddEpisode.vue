<template>
  <div id="addForm">
    <Navigation />
    <md-field>
      <md-icon>add_a_photo</md-icon>
      <label>Image</label>
      <md-input v-model="image"></md-input>
    </md-field>
    <md-field>
      <md-icon>title</md-icon>
      <label>Title</label>
      <md-input v-model="title"></md-input>
    </md-field>
    <md-field>
      <md-icon>panorama</md-icon>
      <label>Season</label>
      <md-input v-model="season"></md-input>
    </md-field>

    <md-field>
      <md-icon>event</md-icon>
      <label>Episode</label>
      <md-input v-model="episode"></md-input>
    </md-field>

    <md-field>
      <md-icon>date_range</md-icon>
      <label>Date</label>
      <md-input v-model="date" placeholder="mm/dd/yyyy"></md-input>
    </md-field>

    <md-field>
      <md-icon>timer</md-icon>
      <label>Time</label>
      <md-input v-model="time"></md-input>
    </md-field>

    <md-field>
      <label>Learn more</label>
      <md-icon>learnmore</md-icon>
      <md-textarea v-model="learnmore"></md-textarea>
    </md-field>
    <md-field>
      <md-button class="md-primary md-raised" @click="postNewEpisode"
        >Add episode</md-button
      >
    </md-field>
  </div>
</template>

<script>
import Navigation from "./Navigation";
const random = require("random");
const axios = require("axios");
export default {
  name: "addepisode",
  data() {
    return {
      image: null,
      title: null,
      season: null,
      episode: null,
      date: null,
      time: null,
      learnmore: null,
      randomNum: null,
      newEpisode: null
    };
  },
  components: { Navigation },
  methods: {
    createEpisode: function() {
      return {
        id: random.int(0, 9999999),
        image: {
          medium: this.image
        },
        name: this.title,
        season: this.season,
        number: this.episode,
        airdate: this.date,
        airtime: this.time,
        summary: this.learnmore
      };
    },
    postNewEpisode: function() {
      this.newEpisode = this.createEpisode();
      axios
        .post("http://localhost:3000/episodes", this.newEpisode)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-field:last-child {
  margin-bottom: 40px;
}
#addForm {
  max-width: 400px;
  margin: 0 auto;
}
</style>
