let res = 0;
let inputAll = document.querySelectorAll('input');
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let kvt = document.querySelector('.kvt input');
let res_kvt = document.querySelector('.output');
let btn = document.querySelector('.btn');

// inputAll.forEach(function(e) {
// 	e.oninput = function(event) {
// 		let tar = this.value;
// 		console.log(tar.search(/[a-z]/gi))
// 		let inVal = document.querySelectorAll('input').value;
// 		if (tar.length == 0) {
// 			this.style.border = '1px solid red';
// 		}
// 		// if(tar.search(/^[\d\.]/i) != -1){
// 		// 	this.style.border = '3px solid red'
// 		// }
// 		// // if (tar.match(/(\.+)|\d+/i)) {
// 		// // 	this.style.border = '3px solid green';
// 		// // }
		
// 		// else{
// 		// 	this.style.border = '1px solid green'
// 		// }
// 	}
	
// })
function checkPhoneForInput(){
	inputAll.forEach(function(item){
	item.onfocus = function(event){
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) document.querySelector('.keyboard').style.display = 'flex'
		event.preventDefault()	
	}
})
}

function clickResult(){
	btn.addEventListener('click', function(e) {
		if (+kvt.value >= 0 && +kvt.value <= 150) res = +kvt.value * +a.value;
		if (+kvt.value > 150 && +kvt.value <= 800) res = (150 * +a.value) + (+kvt.value - 150) * +b.value;
		if (+kvt.value > 800) res = (150 * a.value) + ((+kvt.value - 150) * +b.value) + (+kvt.value - 800) * +c.value;
		res_kvt.innerHTML = res.toFixed(2);
  })
}

function init(){
	clickResult()
	checkPhoneForInput()
}	
init()