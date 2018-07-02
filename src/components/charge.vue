<template>
	<div>
		<p>
			会员等级加1，可在等级奖励页面领取相应奖励
		</p>
		<br>
		<button class="button" @click='buy(1)' v-show='isRankOen'>1 元</button>
		<button class="button" @click='buy(10)'>10 元</button>
		<button class="button" @click='buy(20)'>20 元</button>
		<button class="button" @click='buy(50)'>50 元</button>
	</div>
</template>

<script>
import {wxJsPay, flash} from '../functions'
import {checkOrder} from '../api'
import store from '../store'
export default {
	computed: {
		isRankOen () {
			return store.state.user.rank == 1
		}
	},
  methods: {
    buy (n) {
	  	wxJsPay(n, msg => {
    		// alert(msg)
	        msg == "get_brand_wcpay_request:ok" ? this.success(n) : flash('支付失败')
	        checkOrder(n)
	    })
    },
    success (n) {
    	flash('支付成功')
    	store.commit('increaseRank', n)
    }
  }
}

</script>
