<template>
  <HeaderView />
  <div class = "w-80 sm:w-1/2 m-10 mx-auto bg-white">
    <VideoView />
    <RunView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderView from './components/HeaderView.vue';
import VideoView from './components/VideoView.vue';
import RunView from './components/RunView.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderView,
    VideoView,
    RunView
  }
});
</script>
