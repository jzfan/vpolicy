<template>
	<table v-if='recommends != null'>

		<tr>
			<td>
				<span class="tags">
					<span v-for='red in recommends.red' class="tag is-rounded" :class='isRedWin(red)'>{{red | addZero}}</span>
				</span>
			</td>
			<td>预估概率
			<percent :index='1'></percent>
			</td>
		</tr>

		<tr>
			<td>
				<span class="tags">
					<span v-for='blue in recommends.blue' class="tag is-rounded" :class='isBlueWin(blue)'>{{blue | addZero}}</span>
				</span>
			</td>
			<td>预估概率
			<percent :index='2'></percent>
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
		formatNunmber (number) {
			return (number < 10) ? '0' + number : number.toString()
		},
		isBlueWin (number) {
			return this.winNumber.blue.includes(this.formatNunmber(number)) ? 'is-link' : 'has-text-link'
		},
		isRedWin (number) {
			// if (number == 26) {
			// 	console.log(this.winNumber.red)
			// 	console.log(this.winNumber.red.includes(number.toString()))
			// }
			return this.winNumber.red.includes(this.formatNunmber(number)) ? 'is-danger' : 'has-text-danger'
		},
	},
	filters: {
		addZero(num) {
			return (num < 10) ? '0' + num : num
		}
	}
}
</script>