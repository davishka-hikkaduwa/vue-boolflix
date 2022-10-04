<template>
    <div>
        <font-awesome-icon v-for="index in max" :key="index" 
            :icon= "[
                index <= stars ? 'fa-solid' : 'fa-regular', 'fa-star'
            ]"
        />
        {{ stars }}
    </div>
</template>

<script>
const MAX_STARS = 5;
const VOTE_BASE = 10;  

export default {
    name: 'RatingComponent',
    data(){
        return {
            max: MAX_STARS
        }
    },
    props: {
        vote: Number,
    },
    computed: {
        stars(){
        return Math.ceil((this.vote / VOTE_BASE) * MAX_STARS)
        },
    },
    
}

</script>

<style scoped lang="scss">
    .fa-star{
        color: gold;
    }
</style>