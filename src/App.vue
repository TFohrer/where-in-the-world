<template>
    <div id="app">
        <nav class="main-nav">
            <p class="main-nav__title">Where in the world</p>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view/>
        <footer>
            &copy; T
        </footer>
    </div>
</template>

<style lang="scss">
    @import "./styles/main";
</style>
