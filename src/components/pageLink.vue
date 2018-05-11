<template>
	<nav class="pagination is-right" role="navigation" aria-label="pagination" @click='goTop'>
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
</template>

<script>
import {getPoliciesList, getPageByUrl} from '../api'
export default {
	props: ['page'],
	computed: {
		hasPre () {
			return this.page.current_page != 1
		},
		hasNext () {
			return !!this.page.next_page_url
		}
	},
	methods: {
		goTop () {
			document.documentElement.scrollTop = 0
		},
		pageByUrl(url) {
			getPageByUrl(url, (data) => this.$emit('fresh', data))
		}
	}
}
</script>

