<template>
	<div>
	<table class="table is-fullwidth">
		<tr>
			<th>
				双色球记录
			</th>
		</tr>
		<tr v-for='ssq in page.data'>
			<td>
				<h6>
					期数：{{ssq.expect}}
				</h6>
				<p>
					<ssqBalls :opencode='ssq.opencode'></ssqBalls>
				</p>
			</td>
		</tr>

	</table>
	<pageLink v-on:fresh='fresh' :page='page'></pageLink>
	</div>
</template>

<script>
import ssqBalls from './ssqBalls'
import {getHistoryListByPage} from '../api'
import pageLink from './pageLink'
export default {
	components: {pageLink, ssqBalls},
	data () {
		return {
			page: []
		}
	},
	created () {
		getHistoryListByPage ('ssq', data => this.page = data)
	},
	methods: {
		fresh (page) {
			this.page = page
		}
	}
}
</script>