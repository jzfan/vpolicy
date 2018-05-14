<template>
	<div>
		<p>
		备忘录
		<button class="button is-success is-pulled-right" @click='save'>保存</button>
		</p>
		<br>
		<textarea class="textarea" v-model='notebook'></textarea>
	</div>
</template>

<script>
export default {
	data () {
		return {
			notebook: null
		}
	},
	created () {
		this.notebook = JSON.parse(localStorage.getItem('notebook'))
	},
	methods: {
		save () {
			localStorage.setItem('notebook', JSON.stringify(this.notebook))
		}
	}
}
</script>