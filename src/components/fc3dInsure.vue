<template>
	<div class="box content">
	    <h3 class="has-text-centered">
	      红包券
	    </h3>
	  	<p>
			类别： 福彩3D
	  	</p>

<p>
	<span>投注号码：</span>
<input class="input"  type="text" placeholder="请输入已投注号码" v-model='number'>
</p> 



	  	<div class="field is-grouped is-grouped-multiline">
	  		<p>大数据智能预测号码：</p>
	  	  <div class="control"  v-for='recommend in recommendedNumbers'>
	  	    <div class="tags">
	  	      <a class="tag is-link">{{recommend | addZero}}</a>
	  	    </div>
	  	  </div>
	  	</div>
	  <footer class="">
	    <a class="button is-primary" @click='save'>预测</a>
	    <a class="button is-info"  @click='active'>激活</a>
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
		}
	},
	created () {
		getPolicy ('ssq', (data) => {
			if (data) {
				// this.setData(data)
			}
		})
	},
	methods: {
		save() {

		},
		active() {

		}
	}

}
</script>