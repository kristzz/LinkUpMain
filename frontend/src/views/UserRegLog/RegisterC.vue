<script lang="ts">
export default{

}
</script>

<template>
    <main>
    <div id="container">
        <h1 class="weight-bold">LinkUp!</h1>
        <h5 class="weight-regular">Register to never miss an opportunity for your dream job</h5>
        <input id="name" class="input-window" type="text" placeholder="Name">
        <input id="surname" class="input-window" type="text" placeholder="Surname">
        <div id="age-country">
            <input id="age" class="input-window" type="number" maxlength="3" placeholder="Age">
            <input id="country" class="input-window" type="" placeholder="Country">
        </div>
        <select id="education-level">
            <option value="">Select your education level</option>
            <option value="highschool">High School</option>
            <option value="college">Higher Education Institute</option>
        </select>
        <input id="education" class="input-window" type="text" placeholder="School">
        <input id="degree" class="input-window" type="text" placeholder="Degree in">
    </div>
  </main>
</template>

<style scoped>
    main {
        display: flex;
        justify-content: center;
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
        top: 15%;
        width: 25rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #age-country{
        display: flex;
        width: 20rem;
    }

    #age{
        width: 5rem;
        margin: 1rem 0 0.5rem;
    }
    #country{
        width: 12.5rem;
    }

    #education-level{
        text-decoration: underline;
        cursor: pointer;
        margin-top: 0.2rem;
    }
    .input-window{
        background: var(--background-color);
        border: 2px solid var(--accent-color-two);
        height: 2.5rem;
        min-height: 2.5rem;
        max-height: 2.5rem;
        width: 20rem;
        margin: 1rem 2.5rem 0.5rem;
        border-radius: 1.5rem;
        padding: 0 1rem 0;
    }
</style>