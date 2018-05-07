<template>
	<p>
		<policy-box :policy='policy' :is='byCode(policy.code)'>

<template slot='status'>
		<p>
			<span>状态： {{policy.status | formatStatus}}</span>
			<a class="button is-danger is-focused is-pulled-right" v-show='showPrizeBtn(policy.status)' @click='accept(p)'>领红包</a>
		</p>
		<p>使用日期: {{policy.created_at}}</p>
	
</template>
		</policy-box>
	</p>
</template>

<script>
import ssqCard from './ssqCard'
import fc3dCard from './fc3dCard'
export default {
	props: ['policy'],
	components: {fc3dCard, ssqCard},
	methods: {
		byCode (code) {
			return code + 'Card'
		},
		showPrizeBtn (status) {
			return status == 'won'
		},

	},
	filters: {
		formatStatus(v) {
			if (v == 'active') return '等待开奖'
				if (v == 'won') return '中奖'
					if (v == 'lose') return '未中奖'
						if (v == 'rewarded') return '已领奖'
					}
			}
}
</script>