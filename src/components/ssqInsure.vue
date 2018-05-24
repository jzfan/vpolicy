<template>
	<div>
		<div class="box content">
			<h3 class="has-text-centered">
				红包券
			</h3>
			<p>
				类别： 双色球
			</p>
			<p>期数： <span class="has-text-info">{{ expect }}</span></p>
			<p>
				<span class="has-text-info">请输入实体彩票点已购的蓝球号：</span>
			</p> 
			<p @click='selectNumber' id='balls'>	
				<a class="button is-active is-rounded">01</a>
				<a class="button is-active is-rounded">02</a>
				<a class="button is-active is-rounded">03</a>
				<a class="button is-active is-rounded">04</a>
				<a class="button is-active is-rounded">05</a>
				<a class="button is-active is-rounded">06</a>
				<a class="button is-active is-rounded">07</a>
				<a class="button is-active is-rounded">08</a>
				<a class="button is-active is-rounded">09</a>
				<a class="button is-active is-rounded">10</a>
				<a class="button is-active is-rounded">11</a>
				<a class="button is-active is-rounded">12</a>
				<a class="button is-active is-rounded">13</a>
				<a class="button is-active is-rounded">14</a>
				<a class="button is-active is-rounded">15</a>
				<a class="button is-active is-rounded">16</a>
			</p>
			<forecastSection v-on:noTicket='noTicket' v-on:save='save' v-on:loading='isLoading' :isDisabled='isDisabled' :number='number'></forecastSection>
			<ssqRecommendList :recommends='recommendedNumbers'></ssqRecommendList>
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
		<noTicketModal v-if='showNoTicket' v-on:close='closeNoTicket'></noTicketModal>
	</div>
</template>

<script>
import {createPolicy, activePolicy, getPolicy} from '../api'
import ssqRecommendList from './ssqRecommendList'
import { mapGetters } from 'vuex'
import store from '../store'
import moment from 'moment'
import forecastSection from './forecastSection'
import noTicketModal from './noTicketModal'
export default {
	components: { forecastSection, ssqRecommendList, noTicketModal},
	data () {
		return {
			number: null,
			recommendedNumbers: null,
			ssq: null,
			saved: false,
			loading: false,
			showNoTicket: false
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
		...mapGetters(['ticketsRemain', 'ticketsUsed']),
		isDisabled () {
			if (this.loading) return true
			if (this.ssq) return true
				if (this.number == null) return true
					if (this.number > 16) return true
						if (this.number < 0) return true
							return false
					},
					isDisabled2 () {
						if (!this.ssq) return true
							return this.ssq.status == 'active'
					},
			expect () {
				return store.state.expect.ssq.next
			}
		},
		methods: {
			isLoading () {
				this.loading = true
			},
			noTicket () {
				this.showNoTicket = true
			},
			closeNoTicket () {
				this.showNoTicket = false
			},
			save () {
				// if (this.isDisabled) return
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
						this.loading = false
						this.clearSelected()
						this.recommendedNumbers = null
						store.commit('ticketUsed')
					})
			},
			setData(data) {
				this.ssq = data
				this.number = this.ssq.number
				this.recommendedNumbers = this.ssq.recommend
			},
			selectNumber(e) {
				if (this.ssq) return
					this.clearSelected()
				// console.log(parent.querySelectorAll('a'))
				this.number = e.target.text
				e.target.className += ' is-link'
			},
			clearSelected() {
				document.getElementById('balls').querySelectorAll('a').forEach((item) => {
					item.className = 'button is-active is-rounded'
				})
			}
		},
		filters: {
			addZero(num) {
				return num + 0 < 10 ? '0' + num : num
			}
		}
	}
	</script>