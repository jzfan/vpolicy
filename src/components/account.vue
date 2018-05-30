<template>
	<div class="content">
		<article class="message is-dark">
		  <div class="message-body">
		    可用余额 : {{user.account | cent2yuan}} 元
		  </div>
		</article>
		<figure v-if='user.qrcode_ticket'>
		    <img :src="qrcode_src"/>
		</figure>
		<a v-else class="button" @click='qrcode'>推荐二维码</a>
	</div>
</template>

<script>
import store from '../store'
import {getQrcode} from '../api'
export default {
	computed: {
		user () {
			return store.state.user
		},
		qrcode_src () {
			return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${this.user.qrcode_ticket}`
		}
	},
	filters: {
		cent2yuan (cent) {
			cent = cent == 0 ? '000' :cent.toString()
			return cent.slice(0, -2) + '.' + cent.slice(-2)
		}
	},
	methods: {
		qrcode () {
			getQrcode (data => store.commit('setQrcode', data))
		}
	}
}
</script>