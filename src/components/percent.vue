<template>
	<!-- <span>{{ percent[index] }}%</span> -->
	<span class="tag is-light">{{ percent[index] }}%</span>
</template>

<script>
export default {
	props: ['index'],
	data () {
		return {
			percent: []
		}
	},
	methods: {
		randomDivide(total, nums) {
		    let rest = total;
		    const result = Array.apply(null, { length: nums })
		        .map((n, i) => nums - i)
		        .map(n => {
		            const v = 1 + Math.floor(Math.random() * (rest / n * 2 - 1))
		            rest -= v
		            return v
		        })
		    result[nums - 1] += rest
		    return result
		},
	},
	created () {
		let n = Math.floor(Math.random()*(51));
		this.percent =  this.randomDivide(n, 3).map((item) => item + 10).sort().reverse()
	}
}
</script>