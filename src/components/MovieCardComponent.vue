<template>
    <div class="card my-2 p-2 col-4 ">
        <p>Title: {{ movie.title }}</p>
        <p>Original Title: {{ movie.original_title }}</p>
        <RatingComponent :vote="movie.vote_average"/>
        <p>Language:
            <FlagComponent :language="movie.original_language"/>
        </p>
        <CoverPosterComponent :alt="movie.title" :image="movie.poster_path"/>
    </div>    

</template>

<script>
import FlagComponent from '@/components/FlagComponent.vue';
import CoverPosterComponent from '@/components/CoverPosterComponent.vue';
import RatingComponent from './RatingComponent.vue';
export default {
    name: 'MovieCardComponent',
    props: {
        movie: Object,
    },
    components: {
    FlagComponent,
    CoverPosterComponent,
    RatingComponent
},
}
</script>

<style scoped lang="scss">
.card{
    border: 1px solid black;
    // width: 300px;
}

</style>