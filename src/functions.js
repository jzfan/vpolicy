import bus from './bus'
import {order} from './api'

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

function onBridgeReady(n, cb){
   order(n, data => {
	   WeixinJSBridge.invoke(
	       'getBrandWCPayRequest', data,
	       function(res){
	       		cb(res.err_msg)
	       }
	   ); 
   })
}
function wxJsPay(n, cb) {
	if (typeof WeixinJSBridge == "undefined"){
	   if( document.addEventListener ){
	       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
	   }else if (document.attachEvent){
	       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
	       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
	   }
	}else{
	   onBridgeReady(n, cb);
	}
}

export {
	flash,
	lotteryChartQueryLimitErrorFlash,
	wxJsPay
}