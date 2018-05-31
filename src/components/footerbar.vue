<template>
	<nav class="level navbar is-fixed-bottom is-mobile has-text-centered">
		<div class="level-item">
			<router-link to="/" class="has-text-dark">
				<span class="icon has-text-link">
				  <i class="iconfont icon-interface3"></i>
				</span>
			历史分析</router-link>
		</div>
		<div class="level-item">
			<router-link to="/insure" class="has-text-dark">
				<span class="icon has-text-danger">
				  <i class="iconfont icon-hongbao"></i>
				</span>
			预测红包</router-link>
		</div>
		<div class="level-item">
			<router-link to="/account" class="has-text-dark">
				<span class="icon has-text-info">
				  <i class="iconfont icon-account"></i>
				</span>
			会员中心</router-link>
		</div>
	</nav>
</template>
