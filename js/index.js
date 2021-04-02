var res = 0;
var a   = document.querySelector('.a');
var b   = document.querySelector('.b');
var c   = document.querySelector('.c');
var kvt = document.querySelector('.kvt input');
var res_kvt = document.querySelector('.output');
var btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
	if(+kvt.value >= 0 && +kvt.value <= 150) res = +kvt.value * +a.value;
  if(+kvt.value > 150 && +kvt.value <= 800) res = (150 * +a.value) + (+kvt.value - 150) * +b.value;
  if(+kvt.value > 800) res = (150 * a.value) + ((+kvt.value - 150) * +b.value) + (+kvt.value - 800) * +c.value;
	res_kvt.innerHTML = res;
	
})