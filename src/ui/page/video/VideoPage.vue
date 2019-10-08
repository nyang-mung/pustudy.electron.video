<template>
  <pu-video-player v-bind:options="videoOptions" v-bind:sources="sources" />
</template>

<script>
import PuVideoPlayer from "../../components/PuVideoPlayer.vue";
export default {
  data() {
    return {
      videoOptions: {
        autoplay: true,
        muted: false,
        controls: true
      },
      sources: [
        { type: "video/mp4", src: "./page/video/assets/mp4/apple.mp4" },
        { type: "video/mp4", src: "./page/video/assets/mp4/google.mp4" },
        { type: "video/mp4", src: "./page/video/assets/mp4/volvo.mp4" },
        { type: "video/mp4", src: "./page/video/assets/mp4/samsung.mp4" }
      ]
    };
  },
  components: {
    PuVideoPlayer
  },
};


</script>