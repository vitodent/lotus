<template>
    <h1>Home Page - {{ route.params.category }}</h1>
</template>
<script>
import { useRoute } from 'vue-router'
const route = useRoute()
export default {
    components: {
        route
    }
}



console.log(route.params)
</script>
<style></style>