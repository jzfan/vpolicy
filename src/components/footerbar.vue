<template>
	<nav class="level navbar is-fixed-bottom is-mobile has-text-centered">
		<div class="level-item" @click='closeDropdown'>
			<router-link to="/" class="has-text-dark">
				<span class="icon has-text-link">
				  <i class="iconfont icon-interface3"></i>
				</span>
			历史分析</router-link>
		</div>
		<div class="level-item" @click='closeDropdown'>
			<router-link to="/insure" class="has-text-dark">
				<span class="icon has-text-danger">
				  <i class="iconfont icon-hongbao"></i>
				</span>
			预测红包</router-link>
		</div>
		<div class="level-item dropdown is-up is-right is-active">

			<div class="dropdown-trigger" @click='openDropdown'>
				<span :class='[dropdownActive ? "has-text-primary" : "has-text-dark"]'>
					<span class="icon has-text-info">
					  <i class="iconfont icon-fuli"></i>
					</span>
				会员中心</span>
			</div>
			<transition name="fade">
				<div v-if='showMenu'>
					<div class="dropdown-menu" id="dropdown-menu" role="menu" @click='dropdownSelected'>
						<div class="dropdown-content">
							<router-link to="/account" class="has-text-dark dropdown-item">
								<span class="icon has-text-success">
								  <i class="iconfont icon-account"></i>
								</span>
							账号信息</router-link>
							<hr class="dropdown-divider">
							<router-link to="/points" class="has-text-dark dropdown-item">
								<span class="icon has-text-danger">
								  <i class="iconfont icon-iconfontzhizuobiaozhun023140"></i>
								</span>
							每日签到</router-link>
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
			showMenu: false,
			timeoutID: null
		}
	},
	methods: {
		openDropdown() {
			if (this.timeoutID !== null) {
				clearTimeout(this.timeoutID)
			}
			this.showMenu = true
			this.dropdownActive = true
			this.timeoutID = setTimeout(() => this.closeDropdown(), 3000)
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