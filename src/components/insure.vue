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
			    	<dd v-show='showDetails'>通过红包券的使用激活，若您彩票点投注的号码没中，同时我们预测的号码也没中，则我们以红包的形式送给您2-68元现金</dd>
			    </dl>
		    </div>
		</div>

	  	<a class="button is-info" @click='insure("fc3d")' style="width: 100%">智能预测、激活红包 福彩3D</a>
	  	<br>
	  	<br>
	  	<a class="button is-primary" @click='insure("ssq")' style="width: 100%">智能预测、激活红包 双色球</a>
	  	<br>
	  	<br>

		<goChargeModal v-if='needCharge'></goChargeModal>
	  	

	</div>
</template>

<script>
import {getTickets} from '../api'
// import router from '../router'
import { mapGetters } from 'vuex'
import goChargeModal from './goChargeModal'
import {flash} from '../functions'
export default {
	components: {goChargeModal},
	data () {
		return {
			showDetails: false,
			needCharge: false
		}
	},
	computed: {
		...mapGetters(['ticketsRemain']),
	},
	methods: {
		insure(code) {
			let hour = (new Date()).getHours()
			// let minutes = (new Date()).getMinutes()
			if (hour == 21) {
				flash('开奖中..请等待')
				return
			}
			this.ticketsRemain > 0 ? this.$router.push(`${code}Insure`) : this.needCharge = true
		},
		getFreeTickets(n) {
			getTickets(n, (data) => console.log(data))
		}
	}
}
</script>