<template>
    <div class="card my-2 p-2 col-4">
        <div class="cover-poster-component">
            <CoverPosterComponent :alt="title" :image="image"/>
        </div>
        <div class="info">
            <p>Title: {{ title }}</p>
            <p>Original Title: {{ originalTitle }}</p>
            <RatingComponent :vote="vote"/>
            <p class="plot">{{ overview }}</p>
            <p>Language:
                <FlagComponent :language="language"/>
            </p>
        </div>
        
    </div>    

</template>

<script>
import FlagComponent from '@/components/FlagComponent.vue';
import CoverPosterComponent from '@/components/CoverPosterComponent.vue';
import RatingComponent from '@/components/RatingComponent.vue';

export default {
    name: 'CardComponent',
    props: {
        title: String,
        originalTitle: String,
        vote: Number,
        language: String,
        image: String,
        overview: String,
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
    height: 500px;
    position: relative;
    .cover-poster-component{
        position: absolute;
        top: 0;
        left: 0;
    }
    &:hover .cover-poster-component{
        display: none;
    }
    .plot{
        overflow-y: auto;
        max-height: 300px;
    }
}

</style>