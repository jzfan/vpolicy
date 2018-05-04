<template>
	<div>
	<div class="box content">
		<h3 class="has-text-centered">
			红包券
		</h3>
		<p>
			类别： 福彩3D
		</p>
		<p>期数： {{ expect }}</p>
		<p>
			<span>实体彩票点已购的蓝球号：</span>
			<p>{{number}}</p>
		</p> 
		<p v-show='selectAble'>	
			<numbers v-on:chose-number="selectNumbers"></numbers>
		</p>
		<a class="button is-danger"  @click='reset' v-show='!selectAble'>重置</a>
		<forecastSection v-on:save='save' :isDisabled='isDisabled'></forecastSection>
		<p>大数据智能预测号码：</p>

		<div class="tags"  v-for='recommend in recommendedNumbers'>
			<a class="tag is-link">{{recommend | addZero}}</a>
		</div>

			<p v-show='showMore' @click='displayAll'>...</p>
		<footer class="">
			<a class="button is-info" :disabled="isDisabled2" @click='active' style="width: 100%">激活红包</a>
		</footer>
	</div>
		<p>可用红包券数：{{ticketsRemain}}</p>
		<router-link to="/policiesList" class="button is-primary">已用红包券数：{{ticketsUsed}}</router-link>
	</div>
</template>

<script>
import {createPolicy, activePolicy, getPolicy} from '../api'
import forecastSection from './forecastSection'
import store from '../store'
import moment from 'moment'
import numbers from './numbers'
export default {
	components: {numbers, forecastSection},
	data () {
		return {
			number: null,
			recommendedNumbers: [],
			fc3d: null,
			saved: false,
			showMore: false
		}
	},
	created () {
		getPolicy ('fc3d', (data) => {
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
				if (this.fc3d) return true
				if (this.number == null) return true
				return false
			},
			isDisabled2 () {
				if (!this.fc3d) return true
				return this.fc3d.status == 'active'
			},
			// isStatic () {
			// 	if (this.fc3d) {
			// 		let created_at = moment(this.fc3d.created_at)
			// 		if (moment().diff(created_at, 'days') == 0) {
			// 			return true
			// 		}
			// 	}
			// 	return false
			// },
			expect () {
				return store.state.expect.fc3d.next
			},
			selectAble () {
				return this.number == null || this.number.length < 3
			}
		},
		methods: {
			save () {
				if (this.isDisabled) return
				createPolicy ('fc3d', this.number, (data) => {
					this.setData(data)
					this.saved = true
					this.showMore = true
				})
			},
			active () {
				if (this.isDisabled2) return
					activePolicy ('fc3d', this.fc3d.id, (data) => {
						this.fc3d = null
						this.number = null
						// this.clearSelected()
						this.recommendedNumbers = []
						this.showMore = false
						store.commit('ticketUsed')
					})
			},
			setData(data) {
				this.fc3d = data
				this.number = this.fc3d.number
				this.recommendedNumbers = this.fc3d.recommend.slice(1, 10)
			},
			selectNumbers(n) {
				this.number == null ? this.number = n.toString() : this.number += n.toString()
				// this.number += n.toString()
				// console.log(n) 
			},
			reset () {
				this.number = null
			},
			displayAll () {
				this.recommendedNumbers = this.fc3d.recommend
				this.showMore = false
			}
		},
		filters: {
			addZero(num) {
				if( num + 0 < 10 ) {
					return  '00' + num
				}
				if( num + 0 < 100 ) {
					return  '0' + num
				}
				return num
			}
		}
	}
	</script>