<template>
	<div>
		
	<div class="box content">
		<h3 class="has-text-centered">
			红包券
		</h3>
		<p>
			类别： 双色球
		</p>
		<p>期数： {{ expect }}</p>
		<p>
			<span>投注号码：</span>
			<input class="input" type="text" placeholder="请输入已投注号码" v-model='number' v-if='!isStatic'>
			<span class="tag is-link" v-if='isStatic'>{{number|addZero}}</span>
		</p> 


		<p>大数据智能预测号码：</p>
		<div class="field is-grouped is-grouped-multiline">
			<a class="button is-primary" :disabled="isDisabled" @click='save'>预测</a>
			<div class="control"  v-for='recommend in recommendedNumbers'>
				<div class="tags">
					<a class="tag is-link">{{recommend | addZero}}</a>
				</div>
			</div>
		</div>
		<footer class="">
			<a class="button is-info" :disabled="isDisabled2" @click='active' style="width: 100%">激活红包</a>
		</footer>
	</div>
		<p>可用红包券数：{{ticketsRemain}}</p>
		<router-link to="/policiesList" class="has-text-dark">已用红包券数：{{ticketsUsed}}</router-link>
	</div>
</template>

<script>
import {createPolicy, activePolicy, getPolicy} from '../api'
import store from '../store'
import moment from 'moment'
export default {
	data () {
		return {
			number: null,
			recommendedNumbers: [],
			ssq: null,
			saved: false
		}
	},
	created () {
		getPolicy ('ssq', (data) => {
			if (data) {
				this.setData(data)
			}
		})
	},
	computed: {
		ticketsRemain() {
			return store.state.user.tickets_qty
		},
		ticketsUsed() {
			return store.state.user.tickets_used
		},
		isDisabled () {
			// return false
				if (this.ssq) return true
				if (this.number == null) return true
				if (this.number > 17) return true
				if (this.number < 0) return true
				return false
				// return !(this.number != null && this.number > 0 && this.number < 17)
			},
			isDisabled2 () {
				if (!this.ssq) return true
					return this.ssq.status == 'active'
			},
			isStatic () {
				if (this.ssq) {
					let created_at = moment(this.ssq.created_at)
					if (moment().diff(created_at, 'days') == 0) {
						return true
					}
				}
				return false
			},
			expect () {
				return store.state.expect.ssq.next
			}
		},
		methods: {
			save () {
				if (this.isDisabled) return
					createPolicy ('ssq', this.number, (data) => {
						this.setData(data)
						this.saved = true
					})
			},
			active () {
				if (this.isDisabled2) return
					activePolicy ('ssq', this.ssq.id, (data) => {
						this.ssq = null
						this.number = null
						this.recommendedNumbers = []
						store.commit('ticketUsed')
						// this.ssq.status = 'active'
					})
			},
			setData(data) {
				this.ssq = data
				this.number = this.ssq.number
				this.recommendedNumbers = this.ssq.recommend
			}
		},
		filters: {
			addZero(num) {
				return num < 10 ? '0' + num : num
			}
		}

	}
	</script>