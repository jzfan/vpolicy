<template>
	<table v-if='recommend != null'>
		<tr>
			<td>
				百位
			</td>
			<td>
				<span class="tags">
					<span  v-for='bai in recommend.bai' class="tag is-rounded" :class='isWinNumber(bai, "bai")'>{{bai}}</span>
				</span>
			</td>
			<td>
				预估概率<percent :index='0'></percent>
			</td>
		</tr>
		<tr>
			<td>
				十位
			</td>
			<td>
				<span class="tags">
					<span  v-for='shi in recommend.shi' class="tag is-rounded" :class='isWinNumber(shi, "shi")'>{{shi}}</span>
				</span>
			</td>
				<td>
					预估概率<percent :index='1'></percent>
				</td>
			</tr>
			<tr>
				<td>
					个位
				</td>
			<td>
				<span class="tags">
					<span  v-for='ge in recommend.ge' class="tag is-rounded" :class='isWinNumber(ge, "ge")'>{{ge}}</span>
				</span>
			</td>
				<td>
					预估概率<percent :index='2'></percent>
				</td>
			</tr>

	</table>
</template>

<script>

import percent from './percent'
export default {
	components: { percent},
	props: ['recommend', 'winNumber'],
	data () {
		return {
			percent: [],
			displayAll: false
		}
	},
	methods: {
		isWinNumber (number, key) {
			if (this.winNumber != null && number == this.winNumber[key]) {
				return 'is-success'
			}
		}
	},
}
</script>