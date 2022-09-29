<template>
    <header>
        <div class="container">
            <SearchBarComponent/>
        </div>
    </header>
</template>

<script>
import SearchBarComponent from './SearchBarComponent.vue';
export default {
    name: 'HeaderComponent',
    components:{
    SearchBarComponent
}
}
</script>

<style scoped lang="scss">
header{
    background-color: darkgray;
    padding: 10px;
    margin-bottom: 20px;
   
}

</style>