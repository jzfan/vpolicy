<template>
	<section class="hero is-primary">
		<div class="hero-body">
		    <div class="container has-text-centered">
		    	<figure class="image has-text-centered">
		    	<img :src="user.avatar" class="is-128x128">
		    	</figure>
		      <h2 class="subtitle">
		        {{ user.name }}
		      </h2>
		    </div>
		  </div>
	</section>
</template>

<script>
import store from '../store'
export default {
	data() {
		return {
			user: store.state.user
		}
	},
	created() {
		console.log(this.user)
	}
}
</script>