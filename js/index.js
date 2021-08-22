var res = 0;
var inputAll = document.querySelectorAll('input');
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var kvt = document.querySelector('.kvt input');
var res_kvt = document.querySelector('.output');
var btn = document.querySelector('.btn');
var search = ['0','1','2','3','4','5']
inputAll.forEach(function(e) {
	e.oninput = function(event) {
		var tar = this.value;
		console.log(tar)
		var inVal = document.querySelectorAll('input').value;
		// if (tar.length == 0) {
		// 	this.style.border = null;
		// }
		if ((tar.search(/[^\.]/g) == -1) || (tar.search(/\D+/g) == -1)) {
			this.style.border = '3px solid green';
		}
		
		if((tar.search(/[\.]/g) != -1) || (tar.search(/\d+/g) != -1)) {
			this.style.border = '1px solid red';
		}
	}
	event.preventDefault()
})

btn.addEventListener('click', function() {
	if (+kvt.value >= 0 && +kvt.value <= 150) res = +kvt.value * +a.value;
	if (+kvt.value > 150 && +kvt.value <= 800) res = (150 * +a.value) + (+kvt.value - 150) * +b.value;
	if (+kvt.value > 800) res = (150 * a.value) + ((+kvt.value - 150) * +b.value) + (+kvt.value - 800) * +c.value;
	res_kvt.innerHTML = res.toFixed(2);

})