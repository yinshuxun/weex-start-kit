<template>
    <div>
        <search-bar></search-bar>
        <div class="navigator">
            <div class="nav-left">
                <text class="nav-text">about</text>
                <text class="nav-num"> {{num}} </text>
                <text class="nav-num">result</text>
            </div>
            <div class="nav-left">
                <text>+</text>
                <text>|</text>
                <text>+</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
.navigator{
    width: 750px;
    height: 96px;
    flex-direction: row;
    padding: 0 20px;
    border-bottom-style:solid ;
    border-bottom-width: 1px;
    border-bottom-color: #dae0e5;
    align-items: center;
    justify-content: space-between;
}
.nav-left{
    flex-direction: row;
}
.nav-num{
    width: 433px;
    height: 36px;
}
</style>
<script>
    import searchBar from "../components/SearchBar.vue"

    export default{
        data(){
            return {
                num:1655
            }
        },
        components:{
            searchBar
        }
    }
</script>