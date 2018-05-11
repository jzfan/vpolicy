<template>
	<div class="box">
		<p>
			<strong>
				<slot name='name'></slot> 
			</strong>
			<span>{{lottery.expect}}</span> 
			<span>{{lottery.created_at}}</span>
		</p>
		<slot name='balls'></slot>
	</div>
</template>

<script>
export default {
	props: ['lottery']
}
</script>

<style>
.more {
	position: absolute;
	right: 0;
	background:none;
}
</style>