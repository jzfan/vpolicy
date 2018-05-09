<template>
	<div class="modal is-active">
		<div class="modal-background"></div>
		<div class="modal-content">
			<!-- Any other Bulma elements you want -->
			<div class="notification is-info">
				需要充值会员，
				{{seconds}} 秒后跳转
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			timer: null,
			seconds: 3
		}
	},
	created () {
		this.timer = setInterval(() => {
			this.seconds -= 1
		}, 1000)
	},
	watch: {
		seconds () {
			if (this.seconds == 0) {
				clearInterval(this.timer)
				this.$router.push('charge')
			}
		}
	}
}
</script>