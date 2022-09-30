<template>
    <div class="card my-2" >
        <p>Name: {{ tv.name }}</p>
        <p>Original Name: {{ tv.original_name }}</p>
        <p>Average Vote: {{ tv.vote_average }}</p>
        <p>Language:
            <FlagComponent :language="tv.original_language"/>
        </p>
    </div>
</template>

<script>
    import FlagComponent from '@/components/FlagComponent.vue';

    export default {
        name: 'TvShowCardComponent',
        props: {
            tv: Object,
        },
        components: {
            FlagComponent,
        },
    }
</script>

<style scoped lang="scss">
    .card{
        border: 1px solid black;
    }
    
</style>