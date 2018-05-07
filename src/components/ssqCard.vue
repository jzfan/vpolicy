<template>
	<div>
		<p>
			类别： 双色球
		</p>
		<p>期数： {{ policy.expect }}</p>
		<p>
			<span>实体彩票点已购买的蓝球：</span>
			<span class="tag is-link">{{policy.number|addZero}}</span>
		</p> 

		<p>大数据智能预测号码：</p>
		<ssqRecommendList :policy='policy'></ssqRecommendList>

		<slot name='status'></slot>
	</div>
</template>

<script>
import ssqRecommendList from './ssqRecommendList'
export default {
	components: {ssqRecommendList},
	filters: {
		addZero(num) {
			return num < 10 ? '0' + num : num
		}
	},
	props: ['policy']
}
</script>