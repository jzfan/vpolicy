<template>
	<div>
		<p>
			会员等级加1，可在等级奖励页面领取相应奖励
		</p>
		<br>
		<button class="button" @click='buy(1)'>10 元</button>
	</div>
</template>

<script>
import {wxJsPay, flash} from '../functions'
import {checkOrder} from '../api'
import store from '../store'
export default {
  methods: {
    buy (n) {
	  	wxJsPay(msg => {
    		// alert(msg)
	        msg == "get_brand_wcpay_request:ok" ? this.success(n) : flash('支付失败')
	        checkOrder()
	    })
    },
    success (n) {
    	flash('支付成功')
    	store.commit('increaseRank', n)
    }
  }
}

</script>
