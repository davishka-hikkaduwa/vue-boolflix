<template>
    <div class="card my-2 mx-4 p-2 g-col-3">
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
    color: white;
    background-color: rgb(35, 35, 35);
    border: 1px solid rgb(35, 35, 35);
    height: 300px;
    width: 200px;
    position: relative;
  
    .cover-poster-component{
        position: absolute;
        top: 0;
        left: 0;
    }
    &:hover .cover-poster-component{
        display: none;
    }
    .info{
        display: flex;
        flex-direction: column;
        max-height: 280px;
        font-size: 1.5vh;
    }
    .plot{
        overflow-y: auto;
        max-height: 100px;
    }
}

</style>