<template>

    <div id="app">

        <HelloWorld 
            :msg="msg"
            :count="count"
            @increase="add"
        />
         
        <CNavbar />
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import CNavbar from './components/CNavbar.vue'

    export default {
        name: 'app',
        data() {
            return {
                count: 0,
                msg: "Hello World"
            }
        },
        components: {
            HelloWorld,
            CNavbar
        },
        methods: {
            add() {
                this.count++;
            }
        },
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
