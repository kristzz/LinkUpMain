<script lang>
  import { defineComponent } from 'vue';

  import Header from '@/components/NavBar.vue';

  export default{
    name: 'app',
    components: {
      "myheader": Header,
    }
  }
</script>

<template>
  <myheader v-if="$route.path !== '/register' && $route.path !== '/login'" />
  <RouterView />
</template>

<style>
@import '@/assets/styles.css';
</style>