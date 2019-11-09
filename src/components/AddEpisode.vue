<template>
  <div id="addForm">
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
    <span>{{date | formatDate}}</span>

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
      <md-button class="md-primary md-raised" @click="postNewEpisode">Add episode</md-button>
    </md-field>
  </div>
</template>

<script>
const random = require("random");
const axios = require("axios");
export default {
  name: "addepisode",
  data() {
    return {
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
  methods: {
    createEpisode: function() {
      return {
        id: random.int(0, 9999999),
        url:
          "http://www.tvmaze.com/episodes/1623968/game-of-thrones-8x06-the-iron-throne",
        name: this.title,
        season: 8,
        number: 6,
        airdate: "2019-05-19",
        airtime: "21:00",
        airstamp: "2019-05-20T01:00:00+00:00",
        runtime: 80,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/198/495648.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/198/495648.jpg"
        },
        summary:
          "<p>In the aftermath of the devastating attack on King's Landing, Daenerys must face the survivors.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/1623968"
          }
        }
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
