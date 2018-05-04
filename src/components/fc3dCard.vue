<template>
	<div>
		<p>
			类别： 福彩3D
		</p>
		<p>期数： {{ policy.expect }}</p>
		<p>
			<span>实体彩票点已购买的3D号：</span>
			<span class="tag is-link">{{policy.number|addZero}}</span>
		</p> 

		<p>大数据智能预测号码：</p>
		<tagList :recommends='recommendedNumbers' :winNumber='policy.win_number'></tagList>
		<p @click='displayAll' v-show='showMore'>...</p>
		<p>
			{{policy.status | formatStatus}}
			<a class="button is-danger is-focused" v-show='showPrizeBtn(policy.status)' @click='accept(p)'>领红包</a>
		</p>
		<p>使拥日期: {{policy.created_at}}</p>
	</div>
</template>

<script>
import tagList from './tagList'
export default {
	props: ['policy'],
	components: {tagList},
	data () {
		return {
			recommendedNumbers: this.policy.recommend.slice(1, 10),
			showMore: true
		}
	},
	methods: {
		showPrizeBtn (status) {
			return status == 'won'
		},
		accept (p) {
			acceptPrize(p.id, (data) => {
				p.status = 'rewarded'
			})
		},
		displayAll () {
			this.recommendedNumbers = this.policy.recommend
			this.showMore = false
		},
		isWinNumber (number) {
			return number == this.policy.win_number
		}
	},
	filters: {
		addZero(num) {
			if (num < 10) return '00' + num
				if (num < 100) return '0' + num
					return num
			},
			formatStatus(v) {
				if (v == 'active') return '等待开奖'
					if (v == 'won') return '中奖'
						if (v == 'lose') return '未中奖'
							if (v == 'rewarded') return '已领奖'
						}
				}
			}
			</script>