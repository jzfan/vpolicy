<template>
	<div class="tags">
		<template  v-for='(number, index) in numbers'>
			<template v-if='index !== last'>
				<span class="tag is-rounded is-danger">{{ number }}</span>
			</template>
			<template v-else>
				<span class="tag is-rounded is-link">{{ number }}</span>
			</template>
		</template>
		<slot name='more'>
			<span class="tag more" @click='$router.push("ssqHistoryList")'> > </span>
		</slot>
	</div>
</template>

<script>
export default {
	props: ['opencode'],
	computed: {
		numbers () {
			return this.opencode.split(/[,+]/)
		},
		last () {
		    return Object.keys(this.numbers).length-1;
		}
	}
}
</script>