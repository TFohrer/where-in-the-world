<template>
    <div id="app" class="container-fluid">
        <header class="row">
            <p class="header__title text-bold col-auto">Where in the world?</p>
            <div class="col-auto ml-auto">
                <input type="checkbox" name="checkbox" class="switch js-switch-theme">
            </div>
            <!--<nav class="header__nav col-auto">
                <router-link to="/">Home</router-link>
                |
                <router-link to="/country/12">Country</router-link>
            </nav>-->
        </header>
        <main role="main">
            <router-view/>
        </main>
        <!--<footer>
            &copy; T
        </footer>-->
    </div>
</template>

<style lang="scss">
    @import "./styles/main";
</style>
