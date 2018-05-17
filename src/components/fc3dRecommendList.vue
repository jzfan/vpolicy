<template>
	<table v-if='recommend != null'>
		<tr>
			<td>
				百位
			</td>
			<td>
				<span class="tags">
					<span  v-for='bai in recommend.bai' class="tag is-rounded">{{bai}}</span>
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
					<span  v-for='shi in recommend.shi' class="tag is-rounded">{{shi}}</span>
				</span>
			</td>
				<td>
					预估概率<percent :index='0'></percent>
				</td>
			</tr>
			<tr>
				<td>
					个位
				</td>
			<td>
				<span class="tags">
					<span  v-for='ge in recommend.ge' class="tag is-rounded">{{ge}}</span>
				</span>
			</td>
				<td>
					预估概率<percent :index='0'></percent>
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

	},
}
</script>