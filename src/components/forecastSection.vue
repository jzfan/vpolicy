<template>
	<div>
		<p>大数据智能预测号码：</p>
		<div>
			<a class="button is-primary" :disabled="isDisabled" @click='saveClicked'>智能诊断分析预测</a>
			<progress class="progress is-primary" :value='width' max="100" v-show='width'>30%</progress>
		</div>
	</div>
</template>

<script>
export default {
	props: ['isDisabled'],
	data () {
		return {
			width: 0
		}
	},
	methods: {
		saveClicked() {
			let interval = setInterval(() => {
				this.width += 1
				if (this.width == 100) {
					clearInterval(interval)
					this.width = 0
					this.$emit('save')
				}
			}, 30)


		},

	}
}
</script>