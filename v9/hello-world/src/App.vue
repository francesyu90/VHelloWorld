<template>
    <div id="app">
        <HelloWorld msg="Hello World"/>
        <CNavbar />
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import CNavbar from './components/CNavbar.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            CNavbar
        }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
