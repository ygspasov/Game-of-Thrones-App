<template>
  <div>
    <md-card id="display" class="md-accent" md-with-hover v-scroll-reveal.reset="{ delay: 250 }">
      <md-card-media>
        <img :src="episode.image.medium" alt />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{episode.name}}</div>
        <div class="md-subhead">
          Season: {{episode.season}} |
          Episode: {{episode.number}}
        </div>
      </md-card-header>

      <md-card-content>
        <p>Date: {{episode.airdate | formatDate}}</p>
        <p>Time: {{episode.airtime}}</p>
      </md-card-content>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button @click="showHide=!showHide">Edit</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button>Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>
        <md-card-expand-content>
          <md-card-content>
            <p>{{episode.summary | striphtml}}</p>
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>

    <!-- Edit form -->
    <md-card id="edit" class="md-accent" md-with-hover v-if="showHide">
      <h3>Edit image:</h3>
      <input type="text" :placeholder="episode.image.medium" />
      <h3>Edit episode name:</h3>
      <input type="text" :placeholder="episode.name" />
      <h3>Edit season number:</h3>
      <input type="text" :placeholder="episode.season" />
      <h3>Edit episode number:</h3>
      <input type="text" :placeholder="episode.number" />
      <h3>Edit airdate:</h3>
      <input type="text" :placeholder="episode.airdate" />
      <h3>Edit airtime:</h3>
      <input type="text" :placeholder="episode.airtime" />
      <h3>Edit learn more</h3>
      <input type="text" :placeholder="episode.summary | striphtml" />
      <md-button>Update</md-button>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    episode: { type: Object, required: true }
  },
  data() {
    return {
      showHide: false,
      image: this.episode.image.medium
    };
  },
  methods: {}
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
</style>