<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  components: {
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
#app{
  width: 100%;
  height:100%;
  padding : 0;
}
</style>