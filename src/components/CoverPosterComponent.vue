<template>
    <div class="img-container">
        <img :src="imageUrl" :alt="alt" class="cover-poster" @error="setUnavailableCoverPoster($event)">
    </div>
</template>

<script>
    export default {
        name: 'CoverPosterComponent',
        props: {
            image: String,
            width: Number,
            alt: String,
        },
        computed: {
            imageUrl(){
                const width = this.width || 500;
                return 'https://image.tmdb.org/t/p/w' + width + this.image;
            },
        },
        methods: {
            setUnavailableCoverPoster(event){
                event.target.src = 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image-300x225.jpg'
            },
        },
    }
</script>

<style scoped lang="scss">
    .img-container{
        display: flex;
        justify-content: center;
    }
    .cover-poster{
        object-fit: cover;
        width: 100%;
        height: 500px;
    }
</style>