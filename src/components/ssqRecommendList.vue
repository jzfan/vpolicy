<template>
	<table>
		<tr v-for='(re, index) in policy.recommend'>
			<td>
			<span class="tag" :class='[isWinNumber(re) ? "is-danger" : "is-link"]'>{{re | addZero(policy.code)}}</span>
			</td>
			<td>
			<percent :index='index'></percent>
			</td>
		</tr>
	</table>
</template>

<script>

import percent from './percent'
export default {
	components: {percent},
	props: ['policy'],
	data () {
		return {
			percent: []
		}
	},
	methods: {
		isWinNumber (number) {
			return number == this.policy.win_number
		},
	},
	filters: {
		addZero(num, code) {
			return (num < 10) ? '0' + num : num
		}
	}
}
</script>