<template>
	<section class="hero is-primary">
		<div class="hero-body">
		    <div class="container has-text-centered">
		    	<img :src="user.avatar" class="image is-64x64" style="margin:0 auto; border-radius: 50%">
		      <h2 class="subtitle">
		        {{ user.name }}
		      </h2>
		    <div class="points">
		    	<p>等级：{{user.rank}}</p>
		    	<p>积分：{{ user.points }}</p>
		    </div>
		    </div>

		  </div>
	</section>
</template>

<script>
import store from '../store'
export default {
	computed: {
		user () {
			return store.state.user
		}
	}
}
</script>

<style>
.points {
	position: absolute;
	right: 0;
	top: 1rem;
}
</style>