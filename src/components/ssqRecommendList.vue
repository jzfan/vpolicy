<template>
	<table>

		<tr v-for='(re, index) in recommends'>
			<td>
			<span class="tag" :class='[isWinNumber(re) ? "is-danger" : "is-link"]'>{{re | addZero}}</span>
			</td>
			<td>预估概率
			<percent :index='index'></percent>
			</td>
		</tr>
	</table>
</template>

<script>

import percent from './percent'
export default {
	components: {percent},
	props: ['recommends', 'winNumber'],
	data () {
		return {
			percent: []
		}
	},
	methods: {
		isWinNumber (number) {
			return number == this.winNumber
		},
	},
	filters: {
		addZero(num) {
			return (num < 10) ? '0' + num : num
		}
	}
}
</script>