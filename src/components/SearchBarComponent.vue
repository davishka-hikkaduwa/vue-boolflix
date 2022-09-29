<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <input type="text" v-model="searchText" @keyup.enter="doSearch()">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBarComponent',
    data(){
        return {
            searchText: '',
        }
    },
    props: {
        characters: Array,
    },
    methods: {
        doSearch(){
            this.$emit('search', this.searchText);
        }
    },
    components: {

    },
}
</script>

<style scoped lang="scss">


</style>