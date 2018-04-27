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

	  	<a class="button is-info" @click='insure("fc3d")' style="width: 100%">开始投保 福彩3D</a>
	  	<br>
	  	<br>
	  	<a class="button is-primary" @click='insure("ssq")' style="width: 100%">开始投保 双色球</a>
	</div>
</template>

<script>
import axios from '../axios'
import router from '../router'
import store from '../store'
export default {
	methods: {
		insure(code) {
			if (store.state.user.tickets_qty > 0) {
				router.push(`${code}Insure`)
			} else {
				store.commit('selectedCode', code)
				router.push('charge')
			}
		}
	}
}
</script>