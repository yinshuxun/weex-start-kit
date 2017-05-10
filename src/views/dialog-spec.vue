<template>
    <div>
        <div>
            <text class="btn" :click="openDialog">Show Dialog</text>
        </div>

        <div id="dialog" class="dialog" :show="isShowDialog">
            <div class="dialog-backdrop" :click="closeDialog"></div>
            <div class="dialog-content">
                <div class="dialog-header">
                    <text class="dialog-title">{{dialogTitle}}</text>
                    <text class="close" :click="closeDialog">x</text>
                </div>
                <div class="dialog-body">
                    <text>{{dialogBody}}</text>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dialog-backdrop {
        opacity: .5;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000000;
    }

    .dialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        justify-content: center;
        align-items: center;
    }

    .dialog-content {
        width: 450px;
        background-color: #ffffff;
        position: relative;
    }

    .dialog-header {
        padding: 20px;
        position: relative;
        border-bottom-width: 1;
        border-bottom-style: solid;
        border-bottom-color: #efefef;
    }

    .dialog-body {
        padding: 20px;
    }

    .close {
        font-size: 50px;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .btn {
        text-align: center;
        color: #ffffff;
        padding: 12px;
        background-color: #3071a9;
        border-color: #285e8e;
        border-radius: 4px;
    }
</style>

<script>
    export default {
        data(){
            return {
                isShowDialog: false,
                dialogTitle: 'HELLO',
                dialogBody: 'Weex is best!'
            }
        },
        methods: {
            openDialog(e) {
                this.isShowDialog = true
            },
            closeDialog(e) {
                this.isShowDialog = false
                console.log(e)
            }
        }
    }
</script>