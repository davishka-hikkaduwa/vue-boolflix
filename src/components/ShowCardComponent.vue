<template>
    <div class="card my-2" >
        <p>Name: {{ show.name }}</p>
        <p>Original Name: {{ show.original_name }}</p>
        <p>Average Vote: {{ show.vote_average }}</p>
        <p>Language:
            <FlagComponent :language="show.original_language"/>
        </p>
    </div>
</template>

<script>
    import FlagComponent from '@/components/FlagComponent.vue';

    export default {
        name: 'ShowCardComponent',
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