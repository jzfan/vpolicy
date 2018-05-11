<template>
	<div class="content">	
	<notice v-for='lottery in list' :lottery='lottery' :key='lottery.id' :is='noticeByCode(lottery.code)'></notice>
	</div>
</template>

<script>
import ssqNotice from './ssqNotice'
import fc3dNotice from './fc3dNotice'
import {getCurrentNotice} from '../api'
export default {
	components: {ssqNotice, fc3dNotice},
	data () {
		return {
			list: []
		}
	},
	methods: {
		noticeByCode (code) {
			return `${code}Notice`
		}
	},
	created () {
		getCurrentNotice (data => this.list = data)
	}
}
</script>