function getFirstSelector(selector) {
	return document.querySelector(selector);
};
function nestedTarget() {
	return document.querySelector('#nested .target');
};
function increaseRankBy(n) {
	const lis = document.getElementById('app').querySelectorAll('.ranked-list')
	for (let i = 0; i < lis.length; i++) {
	  lis[i].innerHTML = (i + n).toString()
	}
};
function deepestChild() {
	const lis = document.getElementById('grand-node').querySelectorAll('div')
	for (let i = 0; i < lis.length; i++) {
		if (i === lis.length - 1 ) {
	 	 return lis[i]
		}
	}
};