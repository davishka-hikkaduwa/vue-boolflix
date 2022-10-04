<template>
    <header>
        <h1>BOOLFLIX</h1>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(35, 35, 35);
    padding: 10px;
   h1{
    color: rgb(175, 2, 2);
    font-family: 'Bebas Neue';
   }
}

</style>