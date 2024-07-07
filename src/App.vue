<template>
    <div class="AppWrapper">
        <NavigationButtons />

        <router-view />
    </div>
</template>

<script setup>
    import NavigationButtons from '@/components/actions/NavigationButtons'
</script>

<style lang="scss">
@import "./css/colors";
@import "./css/variables";

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html,
body {
    background-color: $p-blue;
    min-height: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
}

*,
h1,
h2,
h3,
h4,
h5,
h6 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.AppWrapper {
    padding: 4rem;
    padding-top: 0.5rem;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: $tablet-scr-size) {
        padding: 1rem;
    }
}
</style>
