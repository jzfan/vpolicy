<template>
	<div class="modal is-active">
		<div class="modal-background" @click='$emit("close")'></div>
		<div class="modal-content">
			<!-- Any other Bulma elements you want -->
			<div class="notification is-info">
			  没有红包卷了，请点击 <a href="/charge"><strong>充值会员</strong></a> 领取
			</div>
		</div>
		<button class="modal-close is-large" aria-label="close" @click='$emit("close")'></button>
	</div>
</template>