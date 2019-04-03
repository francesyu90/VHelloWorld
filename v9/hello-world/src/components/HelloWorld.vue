<template>
    <div class="hello">

        <h1>{{ msg }}</h1>

        <h5> 
            {{ count }}
        </h5>

        <button @click="add">
            Add 1
        </button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
        count: Number
    },
    methods: {
        add() {
            this.$emit("increase");
        }
    },
}
</script>

<style scoped>
</style>
