<template>
	<div>
		<p>
			类别： 福彩3D
		</p>
		<p>期数： {{ policy.expect }}</p>
		<p>
			<span>实体彩票点已购买的3D号：</span>
			<span class="tag is-link">{{policy.number|addZero}}</span>
		</p> 

		<p>大数据智能预测号码：</p>
		<fc3dRecommendList :policy='policy'></fc3dRecommendList>
		<slot name='percent'></slot>
		<slot name='status'></slot>
	</div>
</template>

<script>
import fc3dRecommendList from './fc3dRecommendList'
export default {
	props: ['policy'],
	components: {fc3dRecommendList},
	filters: {
		addZero(num) {
			if (num < 10) return '00' + num
				if (num < 100) return '0' + num
					return num
			}
	}
}
</script>