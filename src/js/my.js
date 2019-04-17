export default function hight(el, warnColor, prveColor) {
	// console.log(getComputedStyle(el, false)['border'])
	
	// if (getComputedStyle(el, false)['border'] !== `1px solid rgb(204, 204, 204)`) {
	// 	return;
	// }
	el.timer = setTimeout(function() {
		el.style.transition = 'all 1s ease';
		el.style.border = `1px solid ${warnColor}`;
		// 1。阴影距离左边框距离  2.阴影距离上边框距离 3.模糊度  4.阴影扩展
		el.style.boxShadow = `0 12px 10px -5px  ${warnColor}`;
		setTimeout(function() {
			if (prveColor) {
				el.style.transition = 'all 1s ease';
				el.style.boxShadow = `0 12px 10px -5px transparent`;
				el.style.border = `1px solid ${prveColor}`
			}
		}, 1000)
	}, 200)
}
function hexToRgb(hex){
	let result=[];
	if (hex.length===7&&hex.includes('#')) {
		result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		result=[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)].join();
		
	}else if(hex.length===4&&hex.includes('#')){
		result=/^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
		result=[parseInt(result[1].repeat(2),16),parseInt(result[2].repeat(2),16),parseInt(result[3].repeat(2),16)].join();
		
	}else {
		return false;
	}
	result=`rgb(${result})`;
	return result;

}
// console.log(`${hexToRgb('#CCC')}`)
// export {hight};