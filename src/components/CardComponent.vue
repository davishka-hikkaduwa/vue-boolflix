<template>
    <div class="card my-2 p-2 col-4 ">
        <div class="cover-poster-component">
            <CoverPosterComponent :alt="title" :image="image"/>
        </div>
        <div class="info">
            <p>Title: {{ title }}</p>
            <p>Original Title: {{ originalTitle }}</p>
            <RatingComponent :vote="vote"/>
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