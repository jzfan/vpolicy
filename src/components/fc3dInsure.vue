<template>
	<div>
	<div class="box content">
		<h3 class="has-text-centered">
			红包券
		</h3>
		<p>
			类别： 福彩3D
		</p>
		<p>期数： <span class="has-text-info">{{ expect }}</span></p>
		<p>
			<span class="has-text-info">请输入实体彩票点已购的3D号：</span>
			<p>{{number}}</p>
		</p> 
		<p v-show='selectAble'>	
			<numbers v-on:chose-number="selectNumbers"></numbers>
		</p>
		<a class="button is-danger"  @click='reset' v-show='resetable'>重置</a>
		<forecastSection v-on:save='save' :isDisabled='isDisabled'></forecastSection>

		<fc3dRecommendList :recommend='recommendedNumbers'></fc3dRecommendList>

			<a class="button is-info" :disabled="isDisabled2" @click='active' style="width: 100%">激活红包</a>
	</div>
	<div class="columns is-mobile">
		<div class="column">
			
		<span>可用红包券数：{{ticketsRemain}}</span>
		</div>
		<div class="column">
		<router-link to="/policiesList" class="button is-primary">已用红包券数：{{ticketsUsed}}</router-link>
			
		</div>
		
	</div>
	</div>
</template>

<script>
import {createPolicy, activePolicy, getPolicy} from '../api'
import forecastSection from './forecastSection'
import fc3dRecommendList from './fc3dRecommendList'
import store from '../store'
import moment from 'moment'
import numbers from './numbers'
export default {
	components: {numbers, forecastSection, fc3dRecommendList},
	data () {
		return {
			number: null,
			recommendedNumbers: null,
			fc3d: null,
			showMore: false,
			resetable: true
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
				if (this.number == null || this.number.length < 3) return true
				return false
			},
			isDisabled2 () {
				if (!this.fc3d) return true
				return this.fc3d.status == 'active'
			},
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
				this.resetable = false
				createPolicy ('fc3d', this.number, (data) => {
					this.setData(data)
					this.showMore = true

				})
			},
			active () {
				if (this.isDisabled2) return
					activePolicy ('fc3d', this.fc3d.id, (data) => {
						this.fc3d = null
						this.number = null
						// this.clearSelected()
						this.recommendedNumbers = null
						this.showMore = false
						store.commit('ticketUsed')
					})
			},
			setData(data) {
				this.fc3d = data
				this.number = this.fc3d.number
				this.recommendedNumbers = this.fc3d.recommend
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