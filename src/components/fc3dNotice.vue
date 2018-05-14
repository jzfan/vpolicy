<template>
	<baseNotice :lottery='lottery'>
		<template slot='name'>福彩3D</template>
		<div slot='balls' class="tags">
			<div class="tag is-danger is-rounded" v-for='number in opencode'>
				{{ number }}
			</div>
			<span class="tag more" @click='$router.push("fc3dHistoryList")'> > </span>
		</div>
	</baseNotice>
</template>

<script>
import baseNotice from './baseNotice'
export default {
	components: {baseNotice},
	props: ['lottery'],
	computed: {
		opencode () {
			let s = this.lottery.opencode
			// if (s.includes('+')) {
			// 	return s.slice(0, s.indexOf('+')).split(',')
			// }
			return s.split(',')
		}
	}
}
</script>