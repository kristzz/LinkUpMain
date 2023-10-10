<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:5050/register', { email: this.email, password: this.password }
      )
      .then(response => {
        console.log('Response:', response);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error registering:', error);
      });
    },
  },
};
</script>


<template>
  <main>
    <div id="container">
        <h1 class="weight-bold">Welcome!</h1>
        <h5 class="weight-regular">Register to never miss an opportunity for your dream job</h5>
        <input id="email" class="input-window" type="email" placeholder="youremail@example.com" v-model="email">
        <input id="pass" class="input-window" type="password" placeholder="Password" v-model="password">
        <router-link :to="{ name:'login' }" id="reg-btn" @click.prevent="register">Register</router-link>
        <router-link :to="{ name:'login' }" id="redirect-btn">Have an account?&nbsp;<a id="zzz">Log In here!</a></router-link>
    </div>
  </main>
</template>


<style scoped>
    main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    
    background: var(--background-color);
}

h1, h5{
    display: flex;
    justify-content: center;
    margin: 1rem 0 1rem;
}

#container {
    height: 25rem;
    width: 25rem;
    position: absolute;
}

#reg-btn{
    background: var(--accent-color-two);
    color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 7.5rem 0;

    width: 10rem;
    height: 2rem;
    border-radius: 1rem;
    text-decoration: none;
}

#redirect-btn{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    bottom: 2rem;

    text-decoration: none;
    color: var(--secondary-color);
}

#zzz{
    text-decoration: solid underline;
}

.input-window{
    background: var(--background-color);
    border: 2px solid var(--accent-color-two);
    height: 2.5rem;
    width: 20rem;
    margin: 1rem 2.5rem 0.5rem;
    border-radius: 1.5rem;
    padding: 0 1rem 0;
}
</style>