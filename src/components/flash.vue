<template>
	<article class="message is-info flash" v-show='show'>
	  <div class="message-body">
	    {{message}}
	  </div>
	</article>
</template>
<style type="text/css">
.flash {
  position: fixed;
  right: 1.5rem;
  bottom: 3rem;
  z-index: 99
}
</style>

<script>
import bus from '../bus'
export default {
	data () {
		return {
			message: '',
			show: false
		}
	},
	created () {
		bus.$on('flash', this.flash)
	},
	methods: {
		flash (msg) {
			this.message = msg
			this.show = true
			setTimeout(() => {
				this.message = ''
				this.show = false
			}, 3000)
		}
	}
}
</script>