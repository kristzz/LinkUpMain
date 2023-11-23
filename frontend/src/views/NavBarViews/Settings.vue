<template>
    <div id="container">
      <div id="options">
        <button id="Logout" @click="logout">Log Out</button>
        <button id="ChangePass" @click="togglePasswordChange">Change Password</button> 
      </div>
      <div id="options">
        <passwordchange v-show="showPasswordChange" :userId="userId" />
      </div>
      
    </div>
   </template>
   
   <script lang="ts">
   import passwordchange from '@/components/PasswordChange.vue';
   
   export default {
    components: {
      passwordchange
    },
    data() {
      return {
        showPasswordChange: false,
        // Replace with the actual user ID
        userId: 1
      }
    },
    methods: {
      logout() {
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Redirect the user to the login screen
        this.$router.push('/login');
      },
      togglePasswordChange() {
        this.showPasswordChange = !this.showPasswordChange;
      }
    },
    mounted() {
      // Add a click event listener to the button with id="Logout"
      const logoutButton = document.getElementById('Logout');
      logoutButton.addEventListener('click', this.logout);
    },
   };
   </script>


  <style scoped>
    #container{
        height: 70%;
        width: 70%;
        background: var(--secondary-color);
        position: absolute;
        top: 15%;
        left: 15%;
        display: flex;
        color: var(--background-color);
    }
    #options{
        padding: 2rem 1rem 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        width: 30%;
        height: 100%;
    }
    
  </style>