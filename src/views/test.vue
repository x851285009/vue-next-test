<template>
    <div class="test">
        <h1>test count:{{count}}</h1>
        <h2>count * 2 = {{doubleCount}}</h2>
        <h2>state from vuex {{a}}</h2>
        <button @click="add">add</button>  |
        <button @click="update">update a</button>
    </div>
</template>

<script>
    import {ref,computed,getCurrentInstance } from 'vue'
    export default {
        setup() {
            const count = ref(0) 
            const add = () => { count.value++ } 
            // watch(() => count.value, val => { console.log(`count is ${val}`) }) 
            const doubleCount = computed(() => count.value * 2) 
            const { ctx } = getCurrentInstance() 
            const a = computed(() => ctx.$store.state.test.a) 
            const update = () => {
                ctx.$store.commit('setTestA', count.value)  
            } 
            return { count, doubleCount, add, a, update }

            
        },
       
    }
</script>

<style lang="stylus" scoped>
    .test
        color #ff3300
</style>