<script lang="ts">

</script>

<template>
    <header>
       <p><router-link :to="{ name: 'home' }">Home</router-link></p>
       <p><router-link :to="{ name: 'connections'}">Connections</router-link></p>
       <p><router-link :to="{ name: 'jobs'}">Jobs</router-link></p>
       <p><router-link :to="{ name: 'messages' }">Messages</router-link></p>
       <p><router-link :to="{ name: 'notifications'}">Notifications</router-link></p>
       <p><router-link :to="{ name: 'profile'}">Profile</router-link></p>
    </header>
</template>

<style scoped>

header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background: var(--secondary-color);
    color: var(--background-color);

    height:6vh;
    width:100vw;
    gap:2rem;

    transition: 0.5s ease-in-out;
}

a{
    color: var(--background-color);
    text-decoration: none;
}

a:hover, p:hover{
    transform: scale(1.04);
}

</style>