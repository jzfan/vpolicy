<template>
	<p>
		<policy-box :policy='policy' :is='byCode(policy.code)'>
			<template slot='status'>
				<p>
					<span>状态： {{policy.status | formatStatus}}</span>
					<a class="button is-warning is-focused is-pulled-right" v-show='showPrizeBtn(policy.status)' @click='take(policy.id)'>
						<span class="icon has-text-danger">
						  <i class="iconfont icon-hongbao"></i> 
						</span>
					    <span class="has-text-white">
					    	领红包
					    </span>
					</a>
				</p>
				<p>使用日期: {{policy.created_at}}</p>

			</template>
		</policy-box>
	</p>
</template>

<script>
import ssqCard from './ssqCard'
import fc3dCard from './fc3dCard'
import {takeHongbao} from '../api'
import {flash} from '../functions'
import store from '../store'
export default {
	props: ['policy'],
	components: {fc3dCard, ssqCard},
	methods: {
		byCode (code) {
			return code + 'Card'
		},
		showPrizeBtn (status) {
			return status == 'lose'
		},
		take (policy_id) {
			takeHongbao(policy_id, (data) => {
				this.policy.status = 'rewarded'
				store.commit('setAccount', store.state.user.account + data * 100)
				flash(`已领红包${data}元`)
			})
		}
	},
	filters: {
		formatStatus(v) {
			if (v == 'active') return '等待公布'
				if (v == 'won') return '成功'
					if (v == 'lose') return '未成功'
						if (v == 'rewarded') return '已领红包'
					}
			}
		}
		</script>