<template>
  <HeaderView />
  <div class = "w-90 sm:w-1/2 m-10 mx-auto bg-white">
    <MainView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderView from './components/HeaderView.vue';
import MainView from './components/MainView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderView,
    MainView,
  }
});
</script>
