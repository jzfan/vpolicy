<template>
	<baseNotice :lottery='lottery'>
		<template slot='name'>双色球</template>

		<template slot='balls'>
			<ssqBalls :opencode='lottery.opencode'>
				<template slot='more'>
					<span class="tag more" @click='$router.push("ssqHistoryList")'> > </span>
				</template>
			</ssqBalls>
		</template>

	</baseNotice>
</template>

<script>
import baseNotice from './baseNotice'
import ssqBalls from './ssqBalls'
export default {
	components: {baseNotice, ssqBalls},
	props: ['lottery']
}
</script>