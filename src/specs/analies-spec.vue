<template>
	<div>
	</div>
</template>

<style scoped>
	.input {
		font-size: 60px;
		height: 80px;
		width: 750px;
	}
	.button {
		font-size: 36;
		width: 200;
		color: #41B883;
		text-align: center;
		padding-top: 10;
		padding-bottom: 10;
		border-width: 2;
		border-style: solid;
		margin-right: 20;
		border-color: rgb(162, 217, 192);
		background-color: rgba(162, 217, 192, 0.2);
	}
</style>

<script>
	const modal = weex.requireModule('modal')
	module.exports = {
		data: function () {
			return {
				txtInput: '',
				txtChange: '',
				txtReturnType: '',
				txtSelection:'',
				autofocus: false
			};
		},
		methods: {
			ready: function () {
				var self = this;
				setTimeout(function () {
					self.autofocus = true;
				}, 1000);
			},
			onchange: function (event) {
				this.txtChange = event.value;
				console.log('onchange', event.value);
			},
			onreturn: function (event) {
				this.txtReturnType = event.returnKeyType;
				console.log('onreturn', event.type);
			},
			oninput: function (event) {
				this.txtInput = event.value;
				console.log('oninput', event.value);
			},
			focus: function () {
				this.$refs['input1'].focus();
			},
			blur: function () {
				this.$refs['input1'].blur();
			},
			setRange: function() {
				console.log(this.$refs["inputselection"]);
				this.$refs["inputselection"].setSelectionRange(2, 6);
			},
			onfocus () {
				console.log('onfocus:');
				modal.toast({
					message: 'onfocus',
					duration: 0.8
				})
			},
			onblur () {
				console.log('onblur:');
				modal.toast({
					message: 'input blur',
					duration: 0.8
				})
			}
		}
	};
</script>
