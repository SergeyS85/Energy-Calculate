 var body = document.querySelector("body");
var divButtonOn = document.createElement("div");
var divButtonOff = document.createElement("div");
var div = document.querySelectorAll("div,section,header,footer,nav,menu");
var textBlocks = document.querySelectorAll("h1,h2,h3,h4,h5,h6,span,p,img");
var navLi = document.querySelectorAll("ul,ol,li");
var anchor = document.querySelectorAll("a");

// Функции создания кнопок
function createBtn_1(){	
	body.appendChild(divButtonOn);	
	divButtonOn.style.width = "40px";
  divButtonOn.style.height = "40px";
  divButtonOn.style.backgroundColor = "green";
  divButtonOn.style.opacity = 0.8;
  divButtonOn.style.position = "fixed";
  divButtonOn.style.right = "2px";
  divButtonOn.style.top = "2px";
  divButtonOn.style.zIndex = 10000;
  divButtonOn.style.cursor = "pointer";
  divButtonOn.style.outlineColor = "black";
  divButtonOn.style.outlineWidth = "1px";
  divButtonOn.style.outlineStyle = "solid";
}
function createBtn_2(){	
	body.appendChild(divButtonOff);	
	divButtonOff.style.width = "40px";
  divButtonOff.style.height = "40px";
  divButtonOff.style.backgroundColor = "red";
  divButtonOff.style.opacity = 0.8;
  divButtonOff.style.position = "fixed";
  divButtonOff.style.right = "2px";
  divButtonOff.style.top = "46px";
  divButtonOff.style.zIndex = 10000;
  divButtonOff.style.cursor = "pointer";
  divButtonOff.style.outlineColor = "black";
  divButtonOff.style.outlineWidth = "1px";
  divButtonOff.style.outlineStyle = "solid";
}

// Обработчики событий и запись/чтение значений в local storage
divButtonOn.onclick = function(){
	onOutline();
	localStorage.setItem("button_on",onOutline());
	localStorage.removeItem("button_off");
}
divButtonOff.onclick = function(){
	offOutline();
	localStorage.setItem("button_off",offOutline());
	localStorage.removeItem("button_on");
}

// Функция включения стилей
function onOutline(){
	
	for(var i = 0; i < div.length; i++){
		div[i].style.outlineColor = "blue";
		div[i].style.outlineWidth = "1px";
		div[i].style.outlineStyle = "solid";
	}
	for(var m = 0; m < textBlocks.length; m++){
		textBlocks[m].style.outlineColor = "red";
		textBlocks[m].style.outlineWidth = "2px";
		textBlocks[m].style.outlineStyle = "solid";
	}
	for(var j = 0; j < anchor.length; j++){
		anchor[j].style.outlineColor = "#000";
		anchor[j].style.outlineWidth = "1px";
		anchor[j].style.outlineStyle = "dashed";
	}
	for(var s = 0; s < navLi.length; s++){
		navLi[s].style.outlineColor = "#67FF53";
		navLi[s].style.outlineWidth = "1px";
		navLi[s].style.outlineStyle = "solid";
	}

	divButtonOn.style.outlineColor = "black";
	return true;

}
// Функция отключения стилей 
function offOutline(){
	
	for(var i = 0; i < div.length; i++){
		div[i].style.outlineColor = 0;
		div[i].style.outlineWidth = 0;
		div[i].style.outlineStyle = 0;
	}
	for(var m = 0; m < textBlocks.length; m++){
		textBlocks[m].style.outlineColor = 0;
		textBlocks[m].style.outlineWidth = 0;
		textBlocks[m].style.outlineStyle = 0;
	}
	for(var j = 0; j < anchor.length; j++){
		anchor[j].style.outlineColor = 0;
		anchor[j].style.outlineWidth = 0;
		anchor[j].style.outlineStyle = 0;
	}
	for(var s = 0; s < navLi.length; s++){
		navLi[s].style.outlineColor = 0;
		navLi[s].style.outlineWidth = 0;
		navLi[s].style.outlineStyle = 0;
	}
	divButtonOff.style.outlineColor = "black";
	return true;
}

// Проверка хранилища на вкл/выкл
function checkStorage(){	
var btn_on = localStorage.getItem("button_on");
var btn_off = localStorage.getItem("button_off");

	if(btn_on == "true"){
		onOutline();
	}
	else if(btn_off == "true"){
		offOutline();
	}
}

// Самозапускающаяся функция
+function startAllFunctions(){
	createBtn_1();
	createBtn_2();
	checkStorage();
}();

