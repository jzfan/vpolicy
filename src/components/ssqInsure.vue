<template>
	<div class="box content">
	    <h3 class="has-text-centered">
	      红包券
	    </h3>
	  	<p>
			类别： 双色球
	  	</p>

<p>
	<span>投注号码：</span>
<input class="input" :class='{"is-static": isStatic}' type="text" placeholder="请输入已投注号码" v-model='number'>
</p> 



	  	<div class="field is-grouped is-grouped-multiline">
	  		<p>大数据智能预测号码：</p>
	  	  <div class="control"  v-for='number in recommendedNumbers'>
	  	    <div class="tags">
	  	      <a class="tag is-link">{{number}}</a>
	  	    </div>
	  	  </div>
	  	</div>
	  <footer class="">
	    <a class="button is-primary" :disabled="isDisabled" @click='save'>预测</a>
	    <a class="button is-info" :disabled="isDisabled2" @click='active'>激活</a>
	  </footer>
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
			this.ssq = data
		})
		if (this.ssq != null) {
			this.number = this.ssq.number
			this.recommendedNumbers = this.ssq.recommend
		}
	},
	computed: {
		isDisabled () {
			if (this.ssq != null) return true
			if (this.saved == true) return true
			return !(this.number != null && this.number.length != 0 && this.number > 0 && this.number < 17)
		},
		isDisabled2 () {
			if (this.ssq == null) return false
			return this.ssq.status == 'active'
		},
		isStatic () {
			if (this.ssq != null) {
				let created_at = moment(this.ssq.created_at)
				if (moment().diff(created_at, 'days') == 0) {
					return true
				}
			}
			return false
		}
	},
	methods: {
		save () {
			if (this.isDisabled) return
			createPolicy ('ssq', this.number, (data) => {
				this.recommendedNumbers = data
				localStorage.setItem(data.code, JSON.stringify(data))
				this.saved = true
			})
		},
		active () {
			if (this.isDisabled2) return
			activePolicy ('ssq', this.ssq.id, (data) => {
				this.ssq.status = 'active'
				localStorage.setItem('ssq', JSON.stringify(this.ssq))
			})
		}
	}

}
</script>