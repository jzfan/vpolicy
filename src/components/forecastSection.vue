<template>
	<div>
		<div>
			<a class="button is-primary" :disabled="isDisabled" @click='saveClicked'>智能诊断，分析预测</a>
			<span>诊断得分：</span><span class="tag is-warning is-medium is-rounded" v-show='odds'>{{odds}}</span>
			<p>大数据智能预测号码：</p>
			<progress class="progress is-primary" :value='width' max="100" v-show='width'></progress>
		</div>
	</div>
</template>

<script>
import store from '../store'
export default {
	props: ['isDisabled', 'number'],
	data () {
		return {
			width: 0,
			odds: null
		}
	},
	watch: {
		number () {
			if (this.number == null) {
				this.odds = null
			}
		}
	},
	methods: {
		saveClicked() {
			if (store.state.user.tickets_qty <= 0) {
				this.$emit('noTicket')
				return
			}
			this.$emit('loading')
			let interval = setInterval(() => {
				this.width += 1
				this.odds = Math.floor(Math.random() * 100)
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