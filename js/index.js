let res = 0;
let inputAll = document.querySelectorAll('input');
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let kvt = document.querySelector('.kvt input');
let res_kvt = document.querySelector('.output');
let btn = document.querySelector('.btn');

function validateInput(){
	inputAll.forEach(function(e) {
		e.oninput = function(event) {
			let tar = event.target.value;
			let status = false;
			let inVal = document.querySelectorAll('input').value;
			
			if((tar.search(/[^\d\.]/g) == -1)){
				status = true;
				this.style.border = '1px solid green'
			}
			if((tar.search(/[^\d\.]/g) !== -1)){
				this.style.border = '1px solid red'			
			} 
			if (tar.length == 0) {
				this.style.border = 'none';
			}
		}	
  })
}
function getLocalStorageValue(){
	inputAll.forEach(function(item,i){
		item.value = localStorage.getItem('input'+i)
	})
}

function writeInLocalStorage(){
	btn.addEventListener('click',function(){
		inputAll.forEach(function(item,i){
			localStorage.setItem('input'+i,item.value)
		})
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
	getLocalStorageValue()
	validateInput()
	writeInLocalStorage()
	clickResult()
}	
init()