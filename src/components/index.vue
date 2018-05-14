<template>
	<div>
		<div class="box" @click='$router.push("current")'>
			<a class="title is-5">
				<span class="icon has-text-danger">
				  <i class="iconfont icon-gonggao"></i>
				</span>
				当期号码开奖公告
			</a>
		</div>
		<div class="box" @click='$router.push("history")'>
			<a class="title is-5">
				<span class="icon has-text-warning">
				  <i class="iconfont icon-icon"></i>
				</span>
				历史号码统计
			</a>
		</div>
		<div class="box">
			<p class="title is-5">
				<span class="icon has-text-info">
				  <i class="iconfont icon-icon--"></i>
				</span>
				其他信息：消息，技巧 ......
			</p>
		</div>
	</div>
</template>

<style type="text/css">
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>