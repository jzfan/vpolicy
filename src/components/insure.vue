<template>
	<div>
		<div class="box" @click='showDetails = !showDetails'>
		    <p class="title is-5">
		      预测红包使用规则
		    </p>
		    <div class="content">
			    <dl>
			    	<dt>a. 大数据智能预测</dt>
			    	<dd v-show='showDetails'>通过历史大数据分析统计，智能预测下一期开奖号码（双色球，篮球，3D，3个号段）</dd>
			    	<dt>b. 中奖率显著提高</dt>
			    	<dd></dd>
			    	<dt>c. 您的彩票不中，我们给您买单</dt>
			    	<dd v-show='showDetails'>通过红包券的使用激活，若您彩票点投注的号码没中，同时我们预测的号码中，则我们以红包的形式送给您4元现金</dd>
			    </dl>
		    </div>
		</div>

	  	<a class="button is-info" @click='insure("fc3d")' style="width: 100%">智能预测、激活红包 福彩3D</a>
	  	<br>
	  	<br>
	  	<a class="button is-primary" @click='insure("ssq")' style="width: 100%">智能预测、激活红包 双色球</a>
	  	<br>
	  	<br>
	  	<a class="button is-danger" @click='getFreeTickets(10)' style="width: 100%">测试领劵</a>

		<goChargeModal v-if='needCharge'></goChargeModal>
	  	

	</div>
</template>

<script>
import {getTickets} from '../api'
// import router from '../router'
import store from '../store'
import goChargeModal from './goChargeModal'
export default {
	components: {goChargeModal},
	data () {
		return {
			user: store.state.user,
			showDetails: false,
			needCharge: false
		}
	},
	methods: {
		insure(code) {
			if (store.state.user.tickets_qty > 0) {
				this.$router.push(`${code}Insure`)
			} else {
				// store.commit('selectedCode', code)
				this.needCharge = true
				// this.$router.push('charge')
			}
		},
		getFreeTickets(n) {
			getTickets(n, (data) => console.log(data))
		}
	}
}
</script>