<template>
    <div>
        <search-bar></search-bar>
        <div class="navigator">
            <div class="nav-left">
                <text class="nav-text">about</text>
                <text class="nav-num"> {{num}} </text>
                <text class="nav-text">result</text>
            </div>
            <div class="nav-right">
                <text class="micon nav-right-icon1">&#xe618;</text>
                <text>|</text>
                <text class="micon nav-right-icon2">&#xe642;</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .navigator {
        width: 750px;
        height: 96px;
        flex-direction: row;
        padding: 0 20px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #dae0e5;
        align-items: center;
        justify-content: space-between;
    }

    .nav-left {
        flex-direction: row;
        width: 433px;
        height: 36px;
    }

    .nav-right {
        flex-direction: row;
        height: 48px;
        text-align: right;
    }

    .nav-right-icon1 {
        margin-right: 30px;
    }

    .nav-right-icon2 {
        margin-left: 30px;
    }
    
    .nav-text{
        color: #888;
        font-size: 30px;
    }
    .nav-num{
        color: #e54545;
        font-size: 30px;
    }
</style>
<script>
    import searchBar from "../components/SearchBar.vue"

    export default{
        data(){
            return {
                num: 1655
            }
        },
        components: {
            searchBar
        }
    }
</script>