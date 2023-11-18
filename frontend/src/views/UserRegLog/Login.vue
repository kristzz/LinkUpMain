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
 login() {
   axios.post('http://localhost:5050/login', { email: this.email, password: this.password })
     .then(response => {
       if (response.status === 200) {
         // Store the token in local storage
         localStorage.setItem('token', response.data.token);
         console.log('User logged in');
         this.$router.push({ name: 'home' });
       }
     })
     .catch(error => {
       if (error.response && error.response.status === 401) {
         // Display an error message
         console.error('Incorrect email or password');
       } else {
         // Display an error message
         console.error('Error logging in user');
       }
     });
 },
 checkTokenAndLogin() {
   const token = localStorage.getItem('token');
   if (token) {
     // Send the token to the server to verify the user's identity
     axios.get('http://localhost:5050/verify', { headers: { 'Authorization': `Bearer ${token}` } })
       .then(response => {
         if (response.status === 200) {
           // The user is verified, log them in
           console.log('User logged in');
           this.$router.push({ name: 'home' });
         }
       })
       .catch(error => {
         // The token is not valid, remove it from local storage
         localStorage.removeItem('token');
       });
   }
 },
 },
 created() {
 this.checkTokenAndLogin();
 },
};
</script>



<template>
  <main>
    <div id="container">
        <h1 class="weight-bold">Welcome back!</h1>
        <h5 class="weight-regular">Stay signed in to never miss an opportunity for your dream job</h5>
        <input id="email" class="input-window" v-model="email" type="email" placeholder="youremail@example.com">
        <input id="pass" class="input-window" v-model="password" type="password" placeholder="Password">
        <div id="login-btn" @click.prevent="login">Log In</div>
        <router-link :to="{ name:'register' }" id="redirect-btn">Don't have an account?&nbsp;<a id="zzz">Register here!</a></router-link>
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

#login-btn{
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
    cursor: pointer;
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