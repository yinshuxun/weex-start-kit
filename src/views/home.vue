<template>
    <div>
        <text class="back" @click="jump('/')">back</text>
        <text @click="jump('spec1')">jump to spec1</text>
        <text @click="jump('video')">jump to video</text>
        <text @click="jump('trans')">jump to transform</text>
        <text @click="jump('slider')">jump to slider</text>
        <div class="search-area">
            <input class="input" type='text'></input>
            <div class="fixed-button ">search</div>
        </div>
    </div>
</template>
<style scoped>
    .back {
        row: 1;
    }

    .search-area {
        flex-direction: row;
    }

    .input {
        flex: 4;
        border:1px solid ;
    }

    .fixed-button {
        flex: 1;
        background-color: #FC6621;
        border-radius: 10px;
        height:40px;
        margin-left: 20px;
    }
</style>
<script>
  export default{}
</script>
