<template>
	<div>
		<div class="box">
			<p class="title is-5">
				会员充值
			</p>
			<p>充值选项</p>
		</div>
		<div class="box">
			<p class="title is-5">
				我的彩票备忘录
			</p>
			<p>记录存储号码空间</p>
		</div>
		<div class="box">
			<p class="title is-5">
				我的彩票保单明细
			</p>
			<p>已使用的保单</p>
		</div>
		<div class="box">
			<p class="title is-5">
				<router-link to="/account" class="has-text-dark">我的账户</router-link>
			</p>
		</div>
	</div>

</div>
</template>

<script>
import account from './account'
export default {
	components: {account}
}
</script>