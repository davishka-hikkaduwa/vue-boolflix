<template>
    <div class="card my-2">
        <p>Title: {{ movie.title }}</p>
        <p>Original Title: {{ movie.original_title }}</p>
        <p>Average Vote: {{ movie.vote_average }}</p>
        <p>Language:
            <FlagComponent :language="movie.original_language"/>
        </p>
    </div>    

</template>

<script>
import FlagComponent from '@/components/FlagComponent.vue';
export default {
    name: 'MovieCardComponent',
    props: {
        movie: Object,
    },
    components: {
    FlagComponent
},
}
</script>

<style scoped lang="scss">
.card{
    border: 1px solid black;
}

</style>