<template>
	<p class="tags" @click='showMore = !showMore'>
		<span v-for='re in displayChunk' class="tag" :class='[isWinNumber(re) ? "is-danger" : "is-link"]'>{{re | addZero}}
		</span>
		<span class="tag is-white" v-show='!showMore'>...</span>
	</p>
</template>

<script>
export default {
	props: ['chunk', 'winNumber'],
	data () {
		return {
			showMore: false
		}
	},
	filters: {
		addZero(num) {
			if (num < 10) return '00' + num
			if (num < 100) return '0' + num
			return num
		}
	},
	methods: {
		isWinNumber (number) {
			return number == this.winNumber
		},
	},
	computed: {
		displayChunk () {
			return this.showMore ? this.chunk : this.chunk.slice(0,3)
		}
	},
	created () {
		this.chunk = this.chunk.sort((a, b) => a -b)
	}

}
</script>