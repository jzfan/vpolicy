<template>
	<div id='select-div'>
		<a class="button" @click='selectLimit(50, $event)'>50期</a>
		<a class="button" @click='selectLimit(100, $event)'>100期</a>
		<a class="button" @click='selectLimit(200, $event)'>200期</a>
		<span class="field has-addons">
		  <span class="control">
		    <input class="input" type="number" min='1' max="200" v-model.trim.number='limit' placeholder="任意">
		  </span>
		  <span class="control">
		    <a class="button is-info" @click='inputLimit'>
		      分析
		    </a>
		  </span>
		</span>
	</div>
</template>

<script>
export default {
	data () {
		return {
			limit: ''
		}
	},
	methods: {
		selectLimit (select, event) {
			document.querySelectorAll("#select-div>a").forEach(a => a.className='button')
			event.target.className = 'button is-primary'
			this.$emit("getCount", select, 'select')
		},
		inputLimit () {
			this.limit = Math.ceil(this.limit)
			if (this.limit > 0) {
				this.$emit("getCount", this.limit, 'input')
			}
		}
	}
}
</script>

<style type="text/css">
#select-div > a {
	margin-bottom: 1rem;
}
</style>