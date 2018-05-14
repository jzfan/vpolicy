<template>
	<div>
	<table class="table is-fullwidth">
		<tr>
			<th>
				双色球记录
			</th>
		</tr>
		<tr v-for='fc3d in page.data'>
			<td>
				<h6>
					期数：{{fc3d.expect}}
				</h6>
				<div class="tags">
					<div class="tag is-danger is-rounded" v-for='number in opencodeNumber(fc3d.opencode)'>
						{{ number }}
					</div>
				</div>
			</td>
		</tr>

	</table>
	<pageLink v-on:fresh='fresh' :page='page'></pageLink>
	</div>
</template>

<script>
import {getHistoryListByPage} from '../api'
import pageLink from './pageLink'
export default {
	components: {pageLink},
	data () {
		return {
			page: []
		}
	},
	created () {
		getHistoryListByPage ('fc3d', data => this.page = data)
	},
	methods: {
		fresh (page) {
			this.page = page
		},
		opencodeNumber (opencode) {
			return opencode.replace(/,/g, '')
		}
	}
}
</script>