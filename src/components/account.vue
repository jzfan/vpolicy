<template>
	<div>
		<article class="message is-dark">
		  <div class="message-body">
		    可用余额 : {{user.account | cent2yuan}} 元
		  </div>
		</article>
	</div>
</template>

<script>
import store from '../store'
export default {
	data () {
		return {
			user: store.state.user
		}
	},
	filters: {
		cent2yuan (cent) {
			cent = cent == 0 ? '000' :cent.toString()
			return cent.slice(0, -2) + '.' + cent.slice(-2)
		}
	}
}
</script>