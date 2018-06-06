import bus from './bus'

function flash(msg)
{
	bus.$emit('flash', msg)
}
function lotteryChartQueryLimitErrorFlash(limit,  q)
{
	flash('用户等级必须在 ' + lotteryChartQueryLimitReqiredUserRank(limit, q) + ' 级以上')
}

function lotteryChartQueryLimitReqiredUserRank(limit, q)
{
	if (q == 'input') {
		return 4
	}
	if (limit == 50) {
		return 1
	}
	if (limit == 100) {
		return 2
	}
	if (limit == 200) {
		return 3
	}
	return 4
}

export {
	flash,
	lotteryChartQueryLimitErrorFlash
}