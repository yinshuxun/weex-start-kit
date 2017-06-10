<template>
    <div>
        <web ref="webview" :src="url" class="webview"></web>
    </div>
</template>
<script>
//    const webview = weex.requireModule("webview")
    export default{
        data(){
            const {url} = this.$route.params;
            return {
                url
            }
        }
    }
</script>
<style scoped>
.webview{
    width: 750px;
    height: 1334px;
}
</style>