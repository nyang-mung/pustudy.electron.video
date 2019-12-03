<template>
  <section class="center_container">
    <div class="w3-display-middle">
      <img class="center_el" src="./assets/initializing.gif" />
      <span style="color:yellow">3</span>
      <span style="color:red">E</span>
      <span style="color:skyblue">8</span>
      <span style="color:green">A</span>
      <br/>
      <span>{{initMsg[idx]}}</span>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      initMsg: ["waiting.", "waiting..", "waiting..."],
      idx: 0
    };
  },
  props : [
    "observer"
  ], 
  created: function() {
    setInterval(() => {
      this.idx = (this.idx + 1) % 3;
    }, 1000);
  },
  mounted : function(){
    
  }
};
</script>

<style scoped>
.center_container {
  position: absolute;
  font-size: 35px;
  text-align: center;
  color: white;
  background-color : #333b4b;
}

.center_container img {
  display: flex;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  
}
</style>
