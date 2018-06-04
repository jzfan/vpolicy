<template>
	<div>
		<div class="box">
			<div class="content">
				<dl>
					<dt>积分规则</dt>
					<dd>分享好友加100积分，签到加10积分</dd>
					<dt>积分奖励</dt>
					<dd>100个积分可兑换1张红包券</dd>
				</dl>
			</div>
		</div>
		<div class="field is-grouped is-grouped-multiline">
			<div class="control">
				<div class="tags has-addons">
					<a class="tag is-medium">积分</a>
					<a class="tag is-medium">{{user.points}}</a>
				</div>
			</div>

			<div class="control">
				<a class="button is-link" @click='getTicket'>兑换</a>
			</div>

		</div>
		<div class="control">
			<div class="tags has-addons">
				<a class="tag is-medium">可用红包券</a>
				<a class="tag is-medium">{{user.tickets_qty}}</a>
			</div>
		</div>
		<br>

		<div class="field is-grouped is-grouped-centered">
		  <p class="control">
			<a v-if='user.signed' class="button is-static">今日已签到</a>
			<a v-else class="button is-success" @click='signUp'>今日签到</a>
		  </p>
		</div>

	</div>

</template>

<script>
import {points2Ticket, getPointsByDailySignUp} from '../api'
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
		},
		signUp () {
			getPointsByDailySignUp((data) => {
				console.log(data)
				if (data) {
					store.commit('sign')
					flash('签到成功')
					return
				}
				flash('签到失败')
			})
		}
	}
}
</script>