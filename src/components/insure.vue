<template>
	<div>
		<div class="box">
		    <p class="title is-5">
		      号码投保规则介绍
		    </p>
		    <p>大数据智能预测</p>
		    <p>中奖率显著提高</p>
		    <p>你的彩票不中，我们给你买单</p>
		</div>
	<a class="button is-primary is-rounded is-focused" style="width: 100%"
		@click='insure'
	>开始投保</a>
	</div>
</template>

<script>
import axios from '../axios'
export default {
	methods: {
		insure() {
			axios.get('/api/insure')
				 .then(response => {
				 	console.log(response.data)
				 })
		}
	}
}
</script>