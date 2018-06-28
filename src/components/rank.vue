<template>
	<div>
		
	<div class="box">
	    <div class="content">
		    <dl>
		    	<dt>等级规则</dt>
		    	<dd>每10元升一级</dd>
		    	<dt>等级奖励</dt>
		    	<dd>每增加一级可领10张红包券，可用于诊断预测</dd>
		    </dl>
	    </div>
	</div>
		    <div class="field is-grouped is-grouped-multiline">
		    	<div class="control">
		    	  <div class="tags has-addons">
		    	    <a class="tag is-medium">等级奖励</a>
		    	    <a class="tag is-medium">{{user.rank_remain}}</a>
		    	  </div>
		    	</div>


		      <div class="control">
		          <a class="button is-link" @click='getTicket'>领取</a>
		      </div>

		    </div>
		    <div class="control">
		      <div class="tags has-addons">
		        <a class="tag is-medium">可用红包券</a>
		        <a class="tag is-medium">{{user.tickets_qty}}</a>
		      </div>
		    </div>
	</div>

</template>

<script>
import {rank2Tickets} from '../api'
import store from '../store'
import {flash} from '../functions'
export default {
	computed: {
		user () {
			return store.state.user
		}
	},
	methods: {
		getTicket () {
			if (this.user.rank_remain >= 1) {
				rank2Tickets(data=> store.commit('rank2Tickets'))
			} else {
				flash('奖励等级不够')
			}
		}
	}
}
</script>