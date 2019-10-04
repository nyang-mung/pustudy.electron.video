<template>
    <pu-video-player v-bind:options = "videoOptions"/>
</template>

<script>
import PuVideoPlayer from "../../components/PuVideoPlayer.vue";

export default {
    data(){
        return {
            videoOptions :{
                autoplay : true, 
                muted : false, 
                controls : true,
                
            }
        }
    },
    components : {
        PuVideoPlayer
    }
};
</script>