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
		<nav class="pagination is-right" role="navigation" aria-label="pagination">
		  <a class="pagination-previous" v-show='hasPre' @click='pageByUrl(page.prev_page_url)'>
		  	<span class="icon">
		  	  <i class="iconfont icon-prepage"></i>
		  	</span>
		  上一页</a>
		  <a class="pagination-next" v-show='hasNext' @click='pageByUrl(page.next_page_url)'>下一页
		  	<span class="icon">
		  	  <i class="iconfont icon-nextpage"></i>
		  	</span>
		  </a>
		</nav>
	</div>
</template>

<script>
import {getPoliciesList, acceptPrize, getPageByUrl} from '../api'
import policyCard from './policyCard'
export default {
	components: {policyCard},
	data () {
		return {
			page: []
		}
	},
	computed: {
		hasPre () {
			return this.page.current_page != 1
			// if (this.page.current_page == 1) return false
		},
		hasNext () {
			return !!this.page.next_page_url
		}
	},
	created() {
		getPoliciesList((data) => {
			this.page = data
		})
	},
	methods: {
		pageByUrl(url) {
			getPageByUrl(url, (data) => this.page = data)
		}
	}
}
</script>