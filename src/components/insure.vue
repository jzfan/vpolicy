<template>
	<div>
		<div class="box">
		    <p class="title is-5">
		      预测红包使用规则
		    </p>
		    <div class="content">
			    <dl>
			    	<dt>a. 大数据智能预测</dt>
			    	<dd>通过历史大数据分析统计，智能预测下一期开奖号码（双色球，篮球，3D，3个号段）</dd>
			    	<dt>b. 中奖率显著提高</dt>
			    	<dt>c. 您的彩票不中，我们给您买单</dt>
			    	<dd>通过红包券的使用激活，若您彩票点投注的号码没中，同时我们预测的号码中，则我们以红包的形式送给您4元现金</dd>
			    </dl>
		    </div>
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
	data () {
		return {
			user: store.state.user
		}
	},
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