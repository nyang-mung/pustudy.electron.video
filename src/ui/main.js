import Vue from 'vue'
import App from './App.vue'
import Observer from "./Observer";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let observer = new Observer();
new Vue({
  el: '#app',
  components: {
    App : App
  },
  data : {
    observer : observer
  }
})

// setTimeout(()=>{
//   observer.$emit("event_name", "hello");
// }, 2000);