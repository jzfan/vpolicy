<template>
	<div>

		<div class="box content" v-for='p in list'>
			<h3 class="has-text-centered">
				<small>(已用)</small>红包券
			</h3>
			<p>
				类别： 双色球
			</p>
			<p>期数： {{ p.expect }}</p>
			<p>
				<span>投注号码：</span>
				<span class="tag is-link">{{p.number|addZero}}</span>
			</p> 

			<p>大数据智能预测号码：</p>
			<div class="field is-grouped is-grouped-multiline">
				<div class="control"  v-for='re in p.recommend'>
					<div class="tags">
						<a class="tag is-link">{{re | addZero}}</a>
					</div>
				</div>
			</div>
			<p>created at: {{p.created_at}}</p>
		</div>

	</div>
</template>

<script>
import {getPoliciesList} from '../api'
export default {
	data () {
		return {
			list: []
		}
	},
	created() {
		getPoliciesList((data) => {
			this.list = data
		})
	},
	filters: {
		addZero(num) {
			return num < 10 ? '0' + num : num
		}
	}
}
</script>