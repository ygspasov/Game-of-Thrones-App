<template>
  <div v-if="mutableEpisode">
    <md-card id="display" class="md-accent" md-with-hover v-scroll-reveal.reset="{ delay: 250 }">
      <md-card-media>
        <img :src="mutableEpisode.image.medium" alt />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{mutableEpisode.name}}</div>
        <div class="md-subhead">
          Season: {{mutableEpisode.season}} |
          Episode: {{mutableEpisode.number}}
        </div>
      </md-card-header>

      <md-card-content>
        <p>Date: {{mutableEpisode.airdate | formatDate}}</p>
        <p>Time: {{mutableEpisode.airtime}}</p>
      </md-card-content>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <md-card-expand-trigger>
            <md-button class="more">Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>
        <md-card-expand-content>
          <md-card-content>
            <p>{{mutableEpisode.summary | striphtml}}</p>
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
      <md-button @click="showHide=!showHide">Edit</md-button>
      <md-button @click="deleteEpisode">Del</md-button>
    </md-card>

    <!-- Edit form -->
    <md-card id="edit" class="md-accent" md-with-hover v-if="showHide">
      <h3>Edit image:</h3>
      <input type="text" :placeholder="episode.image.medium" v-model="updatedEpisode.image.medium" />
      <h3>Edit episode name:</h3>
      <input type="text" :placeholder="episode.name" v-model="updatedEpisode.name" />
      <h3>Edit season number:</h3>
      <input type="text" :placeholder="episode.season" v-model="updatedEpisode.season" />
      <h3>Edit episode number:</h3>
      <input type="text" :placeholder="episode.number" v-model="updatedEpisode.number" />
      <h3>Edit airdate:</h3>
      <input type="text" :placeholder="episode.airdate" v-model="updatedEpisode.airdate" />
      <h3>Edit airtime:</h3>
      <input type="text" :placeholder="episode.airtime" v-model="updatedEpisode.airtime" />
      <h3>Edit learn more</h3>
      <textarea :placeholder="episode.summary | striphtml" v-model="updatedEpisode.summary"></textarea>
      <md-button @click="updateEpisode">Update</md-button>
    </md-card>
  </div>
</template>

<script>
const axios = require("axios");
const baseURL = "http://localhost:3000/episodes/";
export default {
  props: {
    episode: { type: Object, required: true }
  },
  data() {
    return {
      showHide: false,
      updatedEpisode: {
        id: this.episode.id,
        name: this.episode.name,
        season: this.episode.season,
        number: this.episode.number,
        airdate: this.episode.airdate,
        airtime: this.episode.airtime,
        image: { medium: this.episode.image.medium },
        summary: this.episode.summary
      },
      mutableEpisode: this.episode
    };
  },
  methods: {
    updateEpisode: function() {
      let id = this.episode.id;
      let url = baseURL + id;
      axios
        .patch(url, this.updatedEpisode)
        .then(response => {
          this.mutableEpisode = response.data;
          this.showHide = !this.showHide;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteEpisode: function() {
      let id = this.episode.id;
      let url = baseURL + id;
      axios.delete(url).then(() => {
        this.mutableEpisode = null;
      });
    }
  }
};
</script>

<style scoped>
.md-content,
.md-card {
  width: 250px;
  margin: 5px;
  padding: 5px;
}
#edit input {
  width: 100%;
  height: 30px;
  border: none;
  text-align: center;
}
#edit textarea {
  border: none;
  text-align: center;
}
.md-card .md-title {
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
#display .md-button.more {
  margin: 0 auto;
}
</style>