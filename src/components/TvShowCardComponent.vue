<template>
    <div class="card my-2 mx-1 p-2 col-4" >
        <p>Name: {{ tv.name }}</p>
        <p>Original Name: {{ tv.original_name }}</p>
        <RatingComponent :vote="tv.vote_average"/>
        <p>Language:
            <FlagComponent :language="tv.original_language"/>
        </p>
        <CoverPosterComponent :alt="tv.name" :image="tv.poster_path" :width="500"/>

    </div>
</template>

<script>
    import FlagComponent from '@/components/FlagComponent.vue';
    import CoverPosterComponent from '@/components/CoverPosterComponent.vue';
    import RatingComponent from '@/components/RatingComponent.vue';

    export default {
        name: 'TvShowCardComponent',
        props: {
            tv: Object,
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
    }
    
</style>