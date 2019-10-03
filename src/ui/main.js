import Vue from 'vue'
import App from './App.vue'

let observer = new Vue();
new Vue({
  el: '#app',
  components: {
    App : App
  },
  data : {
    observer : observer
  }
})

setTimeout(()=>{
  observer.$emit("event_name", "hello");
}, 2000);