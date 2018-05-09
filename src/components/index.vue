<template>
	<div>
		<div class="box">
			<p class="title is-5">
				当期号码开奖公告
			</p>
		</div>
		<div class="box">
			<a class="title is-5" @click='$router.push("history")'>
				历史号码统计
			</a>
		</div>
		<div class="box">
			<p class="title is-5">
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