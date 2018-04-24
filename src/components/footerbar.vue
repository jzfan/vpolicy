<template>
	<nav class="level navbar is-fixed-bottom is-mobile has-text-centered">
		<div class="level-item" @click='closeDropdown'>
			<router-link to="/" class="has-text-dark">号码分析</router-link>
		</div>
		<div class="level-item" @click='closeDropdown'>
			<router-link to="/insure" class="has-text-dark">号码投保</router-link>
		</div>
		<div class="level-item dropdown is-up is-right is-active">

			<div class="dropdown-trigger" @click='openDropdown'>
				<span :class='[dropdownActive ? "has-text-primary" : "has-text-dark"]'>号码福利</span>
			</div>
			<transition name="fade">
				<div v-if='showMenu'>
					<div class="dropdown-menu" id="dropdown-menu" role="menu" @click='dropdownSelected'>
						<div class="dropdown-content">
							<router-link to="/account" class="has-text-dark dropdown-item">账号</router-link>
							<hr class="dropdown-divider">
							<router-link to="/benefits" class="has-text-dark dropdown-item">福利</router-link>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			dropdownActive: false,
			showMenu: false
		}
	},
	methods: {
		openDropdown() {
			this.showMenu = true
			this.dropdownActive = true
		},
		closeDropdown() {
			this.showMenu = false
			this.dropdownActive = false
		},
		dropdownSelected() {
			this.showMenu = false
		}
	}
}
</script>

<style type="text/css">
.fade-enter-active, .fade-leave-active {
	transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>