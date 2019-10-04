<template>
  <div id="app">
    <video-page></video-page>
  </div>
</template>

<script>

import VideoPage from "./page/video/VideoPage.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    VideoPage
  },

  created: function() {
    this.observer.$on("event_name", msg => {
      alert(msg);
    });
  },
  props: ["observer"],
  methods: {
  }
};
</script>

<style>
@import "../../node_modules/video.js/dist/video-js.min.css";
#app{
  width: 100%;
  height:100%;
  padding : 0;
  margin: 0;
}
</style>