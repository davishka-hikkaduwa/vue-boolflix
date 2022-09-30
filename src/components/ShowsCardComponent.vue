<template>
    <div class="card my-2" >
        <p>Name: {{ show.name }}</p>
        <p>Original Name: {{ show.original_name }}</p>
        <p>Average Vote: {{ show.vote_average }}</p>
        <p>
            <img class="flag" 
            :src="getFlag(show.original_language)" 
            :alt="show.original_language"
            @error="fixImageError($event)">
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ShowsCardComponent',
        props: {
            tv: Object,
        },
        components: {

        },
    }
</script>

<style scoped lang="scss">
    .card{
        border: 1px solid black;
    }
    
</style>