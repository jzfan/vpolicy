<template>
	<div class="content">
		<h3 class="has-text-centered">
			<small>(已用)</small>红包券
		</h3>
		<div v-for='policy in page.data' class="box">
			<policyCard :policy='policy'></policyCard>
			<!-- <policy-box :policy='p' :is='byCode(p.code)'></policy-box> -->
		</div>
		<br>
<page-link :page='page' v-on:fresh='fresh'></page-link>
	</div>
</template>

<script>
import {getPoliciesList} from '../api'
import policyCard from './policyCard'
import pageLink from './pageLink'
export default {
	components: {policyCard, 'page-link': pageLink},
	data () {
		return {
			page: []
		}
	},
	created() {
		getPoliciesList((data) => {
			this.page = data
		})
	},
	methods: {
		fresh (page) {
			this.page = page
		}
	}
}
</script>