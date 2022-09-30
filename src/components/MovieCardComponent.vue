<template>
    <div class="card my-2">
        <p>Title: {{ movie.title }}</p>
        <p>Original Title: {{ movie.original_title }}</p>
        <p>Average Vote: {{ movie.vote_average }}</p>
        <p>
          <!-- country-flags -->
          <img class="flag" 
            :src="getFlag(movie.original_language)" 
            :alt="movie.original_language"
            @error="fixImageError($event)">
          <!-- /country-flags -->
        </p>
    </div>    

</template>

<script>
export default {
    name: 'MovieCardComponent',
    props: {
        movie: Object,
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