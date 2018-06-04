<template>

	<div class="box">
	    <div class="content">
		    <dl>
		    	<dt>积分规则</dt>
		    	<dd>分享好友加100积分，签到加10积分</dd>
		    	<dt>积分奖励</dt>
		    	<dd>100个积分可兑换1张红包券</dd>
		    </dl>

		    <div class="field is-grouped is-grouped-multiline">
		    	<div class="control">
		    	  <div class="tags has-addons">
		    	    <a class="tag is-medium is-link">券</a>
		    	    <a class="tag">{{user.tickets_qty}}</a>
		    	  </div>
		    	</div>

		      <div class="control">
		        <div class="tags has-addons">
		          <a class="tag is-medium is-link">积分</a>
		          <a class="tag">{{user.points}}</a>
		        </div>
		      </div>

		      <div class="control">
		          <a class="button" @click='getTicket'>兑换</a>
		      </div>

		    </div>

	    </div>
	</div>

</template>

<script>
import {points2Ticket} from '../api'
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
			if (this.user.points >= 200) {
				points2Ticket(data=> store.commit('points2Ticket'))
			} else {
				flash('积分不够')
			}
		}
	}
}
</script>