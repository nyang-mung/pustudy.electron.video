<template>
  <section>
    <nav-vue v-if="shownav" v-on:route="route" v-bind:title="title"></nav-vue>
    <transition name="fade">
      <router-view
        v-bind:observer="observer"
        v-on:route="route"
      ></router-view>
    </transition>
  </section>
</template>

<script>
import VideoPageVue from "./page/video/VideoPage.vue";
import LoadingPageVue from './page/loading/LoadingPage.vue';
import VueRouter from "vue-router";
import {ipcRenderer} from "electron";

let router = new VueRouter({
  routes: [
    { path: "/loading", component: LoadingPageVue },
    { path: "/video", component: VideoPageVue },
  ]
});

export default {
  router,
  data() {
    return {};
  },
  components: {
    VideoPageVue,
    LoadingPageVue
  },

  created: function() {
    this.$router.push("/loading");
    ipcRenderer.on("/route", (event, args) => {
      this.$router.push(args);
    });
    // this.observer.setInnerEventListener("/route", (path)=>{
    //   this.$router.push(path);
    // });
  },
  props: ["observer"],
  methods: {
    routing : (args)=>{
      alert(args);
    }
  }
};
</script>

<style>
@import "../../node_modules/video.js/dist/video-js.min.css";

html,
body,
section {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #f2f4f7;
}
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

</style>