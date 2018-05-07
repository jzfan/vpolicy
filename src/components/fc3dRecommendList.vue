<template>
	<table>
		<tr v-for='(chunk, index) in chunks'>
			<td>
				<fc3dRecommendChunk :chunk='chunk' :winNumber='policy.win_number' :displayAll='displayAll'>
				</fc3dRecommendChunk>
			</td>
			<td>
				<percent :index='index'></percent>
			</td>
		</tr>

	</table>
</template>

<script>
import fc3dRecommendChunk from './fc3dRecommendChunk'
import percent from './percent'
export default {
	components: {fc3dRecommendChunk, percent},
	props: ['policy'],
	data () {
		return {
			percent: [],
			chunks: [],
			displayAll: false
		}
	},
	methods: {
		isWinNumber (number) {
			return number == this.policy.win_number
		},
		randomsort(a, b) {
		   return Math.random()>.5 ? -1 : 1;
		},
		chunk(arr, len) {
		  var chunks = []
		  var i = 0
		  var n = arr.length

		  while (i < n) {
		    chunks.push(arr.slice(i, i += len)); // gives [[0,1,2] [3,4,5]]
		  }
		  return chunks
		},
	},
	created () {
		this.policy.recommend.sort(this.randomsort)
		this.chunks = this.chunk(this.policy.recommend, Math.ceil(this.policy.recommend.length / 3))
	},
	filters: {
		addZero(num, code) {
			if (code == 'ssq') {
				if (num < 10) return '0' + num
			}
			if (code == 'fc3d') {
				if (num < 10) return '00' + num
				if (num < 100) return '0' + num
			}
			return num
		}
	}
}
</script>