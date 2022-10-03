<template>
    <header>
    <!----- SEARCHBOX ----->
        <div class="search-box py-3 px-5">  
            <input type="text" v-model="query" @keyup.enter="$emit('search', query)"/>
                <button @click="$emit('search', query)">Cerca</button>
        </div>       
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    components:{

    },
    data(){
        return {
            query: '',
        }
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