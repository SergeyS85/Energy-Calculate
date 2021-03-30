var res = 0;
var a   = +document.querySelector('.a').value;
var b   = +document.querySelector('.b').value;
var c   = +document.querySelector('.c').value;
var kvt = +document.querySelector('.kvt input').value;
var res_kvt = document.querySelector('.output');
var btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
	if(kvt >= 0 && kvt <= 150) res = kvt * a;
  if(kvt > 150 && kvt <= 800) res = (150 * a) + (kvt - 150) * b;
  if(kvt > 800) res = (150 * a) + ((kvt - 150) * b) + (kvt - 800) * c;
	res_kvt.innerHTML = res;
})