<template>
	<div>
		<div class="tags" v-for='re in recommends'>
			<span class="tag" :class='[isWinNumber(re) ? "is-danger" : "is-link"]'>{{re | addZero}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['recommends', 'winNumber'],
	methods: {
		isWinNumber (number) {
			return number == this.winNumber
		}
	},
	filters: {
		addZero(num) {
			if (num < 10) return '00' + num
			if (num < 100) return '0' + num
			return num
		}
	}
}
</script>