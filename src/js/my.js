export default function hight(el, color, color2) {
	if (el.style.border !== `1px solid rgb(204, 204, 204)`) {
		return;
	}
	// console.log('color')
	el.timer = setTimeout(function() {
		el.style.transition = 'all 1s ease';
		el.style.border = `1px solid ${color}`;
		el.style.boxShadow = `0 12px 10px -5px  ${color}`;
		setTimeout(function() {
			el.style.transition = 'all 1s ease';
			// 1。阴影距离左边框距离  2.阴影距离上边框距离 3.模糊度  4.阴影扩展
			el.style.boxShadow = `0 12px 10px -5px  ${color}`;
			setTimeout(function() {
				el.style.transition = 'all 1s ease';
				el.style.boxShadow = `0 12px 10px -5px  ${color}`;
				setTimeout(function(){
					if (color2) {
						// el.style.border='none'
					    el.style.boxShadow = `0 12px 10px -5px transparent`;
					    el.style.border = `1px solid ${color2}`
				    }
			    }, 500)
			}, 500);

		}, 300)
	}, 200)
}
// export {hight};