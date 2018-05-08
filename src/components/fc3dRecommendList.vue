<template>
	<table>
		<tr v-for='(chunk, index) in chunks'>
			<td>
				<fc3dRecommendChunk :chunk='chunk' :winNumber='winNumber' :displayAll='displayAll'>
				</fc3dRecommendChunk>
			</td>
			<td>
				预估概率<percent :index='index'></percent>
			</td>
		</tr>

	</table>
</template>

<script>
import fc3dRecommendChunk from './fc3dRecommendChunk'
import percent from './percent'
export default {
	components: {fc3dRecommendChunk, percent},
	props: ['recommend', 'winNumber'],
	data () {
		return {
			percent: [],
			displayAll: false
		}
	},
	methods: {
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
	computed: {
		chunks () {
			this.recommend.sort(this.randomsort)
			return this.chunk(this.recommend, Math.ceil(this.recommend.length / 3))
		}
	}
}
</script>