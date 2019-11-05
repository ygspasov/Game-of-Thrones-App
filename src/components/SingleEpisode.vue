<template>
  <md-card class="md-accent" md-with-hover>
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
          <md-button>Edit</md-button>
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
</template>

<script>
export default {
  props: {
    episode: { type: Object, required: true }
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
</style>