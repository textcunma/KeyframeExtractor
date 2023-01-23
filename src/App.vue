<template>
  <HeaderView />
  <div class = "w-80 sm:w-1/2 m-10 mx-auto bg-white">
    <VideoView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderView from './components/HeaderView.vue';
import VideoView from './components/VideoView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderView,
    VideoView
  }
});
</script>
