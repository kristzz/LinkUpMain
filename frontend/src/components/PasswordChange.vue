<template>
    <div>
      <input v-model="newPassword" type="password" placeholder="New password">
      <button @click="changePassword(userId)">Change Password</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['userId'],
  data() {
    return {
      newPassword: '',
    };
  },
  methods: {
    async changePassword(userId) {
      if (userId !== undefined) {
        console.log(`User ID: ${userId}`); // Log the user ID
        try {
          const response = await axios.put('http://localhost:5050/change-password', {
            id: userId,
            newPassword: this.newPassword
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error changing password:', error);
        }
      } else {
        console.error('User ID is undefined');
      }
    },
  },
};
</script>

<style scoped>
::placeholder{
      color: var(--background-color);
    }
</style>
