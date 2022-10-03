<template>
    <div class="card my-2 p-2 col-4" >
        <p>Name: {{ tv.name }}</p>
        <p>Original Name: {{ tv.original_name }}</p>
        <p>Average Vote: {{ tv.vote_average }}</p>
        <p>Language:
            <FlagComponent :language="tv.original_language"/>
        </p>
        <CoverPosterComponent :alt="tv.name" :image="tv.poster_path"/>

    </div>
</template>

<script>
    import FlagComponent from '@/components/FlagComponent.vue';
    import CoverPosterComponent from '@/components/CoverPosterComponent.vue';


    export default {
        name: 'TvShowCardComponent',
        props: {
            tv: Object,
        },
        components: {
            FlagComponent,
            CoverPosterComponent
        },
    }
</script>

<style scoped lang="scss">
    .card{
        border: 1px solid black;
    }
    
</style>