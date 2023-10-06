<script lang>
  import { defineComponent } from 'vue';

  import Header from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';

  export default{
    name: 'app',
    components: {
      "myheader": Header,
      "myfooter": Footer,
    }
  }
</script>

<template>
  <myheader v-if="$route.path !== '/register' && $route.path !== '/login'" />
  <RouterView />
  <myfooter v-if="$route.path !== '/register' && $route.path !== '/login'" />
</template>

<style>
@import '@/assets/styles.css';
</style>