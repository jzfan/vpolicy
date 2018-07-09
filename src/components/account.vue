<template>
	<nav class="panel">
		<div class="panel-block has-text-white" style="background: #23d160">
			<p class="control">	
				<span class="icon has-text-link">
					<i class="iconfont icon-account"></i>
				</span>
				账户余额 : {{user.account | cent2yuan}} 元 
				<a class="button is-pulled-right" @click='withdraw'>提现</a>
			</p>
		</div>
		<p class="panel-block" @click='$router.push("rank")'>
			<span class="icon has-text-info">
				<i class="iconfont icon-ranking_sponsor_star_hollow"></i>
			</span>
			我的等级 : {{user.rank}}
		</p>
		<p class="panel-block" @click='$router.push("rank")'>
			<span class="icon has-text-danger">
				<i class="iconfont icon-sum"></i>
			</span>
			等级奖励
		</p>
		<p class="panel-block" @click='$router.push("points")'>
			<span class="icon has-text-warning">
				<i class="iconfont icon-jifen"></i>
			</span>
			我的积分 : {{user.points}}
		</p>
		<p class="panel-block" @click='switchShowTickets'>
			<span class="icon has-text-danger">
				<i class="iconfont icon-hongbao"></i>
			</span>
			我的红包明细
		</p>
		<div class="panel-block" v-if='showTickets'>
			<div class="column">
				<span>可用红包券数：{{ticketsRemain}}</span>
			</div>
			<div class="column">
				<router-link to="/policiesList" class="button is-primary">已用红包券数：{{ticketsUsed}}</router-link>		
			</div>
		</div>
		<p class="panel-block"  @click='$router.push("charge")'>
			<span class="icon has-text-warning">
				<i class="iconfont icon-5"></i>
			</span>
			会员充值
		</p>
		<p class="panel-block" @click='$router.push("notebook")'>

			<span class="icon has-text-success">
				<i class="iconfont icon-beiwanglu"></i>
			</span>
			我的彩票备忘录
		</p>
		<p class="panel-block" @click='qrcode'>
			<span class="icon has-text-black">
				<i class="iconfont icon-qrcode"></i>
			</span>
			推荐二维码
		</p>
		<figure class="panel-block" v-if='showQrcodeImg'>
			<img :src="qrcode_src" style="width: 160px; margin: 0 auto" />
		</figure>
		<p class="panel-block" @click='showIntroduced'>
			<span class="icon has-text-info">
				<i class="iconfont icon-account"></i>
			</span>
			我的推荐
		</p>
		<table class="table is-fullwidth">
			<tr v-for='person in introduced'>
				<td>{{person.name}}</td>
				<td>等级：{{person.rank}}</td>
			</tr>
		</table>
	</div>

</nav>
</template>

<script>
import store from '../store'
import {getQrcode} from '../api'
import { mapGetters } from 'vuex'
import {transferToWxBalance, introduced} from '../api'
import {flash} from '../functions'
export default {
	data () {
		return {
			showQrcodeImg: false,
			showTickets: false,
			introduced: []
		}
	},
	computed: {
		...mapGetters(['ticketsRemain', 'ticketsUsed']),
		user () {
			return store.state.user
		},
		qrcode_src () {
			return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${this.user.qrcode_ticket}`
		}
	},
	filters: {
		cent2yuan (cent) {
			cent = !cent ? '000' :cent.toString()
			return cent.slice(0, -2) + '.' + cent.slice(-2)
		}
	},
	methods: {
		qrcode () {
			if (this.user.qrcode_ticket == null) {
				getQrcode (data => {
					store.commit('setQrcode', data)
				})
			}
			this.showQrcodeImg = !this.showQrcodeImg
		},
		switchShowTickets () {
			this.showTickets = !this.showTickets
		},
		withdraw () {
			if (this.user.account < 1000) {
				flash('10元以上才可提现')
			}
			transferToWxBalance(data => {
				// alert(JSON.stringify(data))
				data == 'success' ? this.success(n) : flash(data)
			})
		},
		success () {
			store.commit('setAccount', 0)
			flash('提现成功')
		},
		showIntroduced () {
			introduced(data => this.introduced=data)
		}
	}
}
</script>