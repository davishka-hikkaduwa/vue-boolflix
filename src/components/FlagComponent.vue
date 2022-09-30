<template>
    <div class="flag-container"> 
        <img v-if="!loadError" class="flag" 
                :src="getFlag(language)"
                :alt="language"
                @error="loadError = true" /> 
        <span v-else>{{language}}</span>
    </div>
 
</template>

<script>
export default {
    name: 'FlagComponent',
    data(){
        return {
            loadError: false
        }
    },
    props: {
        language: String
    },
    methods:{
        getFlag(country){
            switch(country){
                case 'en':{
                    country = 'gb';
                    break;
                }
                case 'ja':{
                    country = 'jp'
                    break;
                }
            }

            return `https://flagicons.lipis.dev/flags/1x1/${country}.svg`
        }
    }
}
</script>

<style lang="scss" scoped>
.flag-container{
    display: inline;
}
.flag{
  max-width: 20px;
}
</style>