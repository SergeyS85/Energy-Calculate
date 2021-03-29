$(document).ready(function(){
	var $divButtonOn = $("body").append("<div class='div_button-on'>");
	var $divButtonOff =$("body").append("<div class= 'div_button-off'>");
	var $div = $("div,section,header,footer,nav,menu");
	var $textBlocks = $("h1,h2,h3,h4,h5,h6,span,p,img");
	var $navLi = $("ul,ol,li");
	var $anchor = $("a");
  var $on = $(".div_button-on");
  var $off = $(".div_button-off");

	// Функции создания кнопок	
	function createBtn_1(){
    $(".div_button-on").css({
    "width":"40px",
    "height":"40px",
    "background-color":"green",
    "position":"fixed",
    "top": "2px",
    "right": "2px",
    "opacity": "0.8",
    "z-index": "1000",
    "cursor": "pointer",
    "outline": "1px solid black "
  });
  }

  function createBtn_2(){
    $(".div_button-off").css({
    "width":"40px",
    "height":"40px",
    "background-color":"red",
    "position":"fixed",
    "top": "46px",
    "right": "2px",
    "opacity": "0.8",
    "z-index": "1000",
    "cursor": "pointer",
    "outline": "1px solid black"
  });
  }
  //Функции задавания css стилей
  function onOutline(){
     $div.css({"outline":"1px solid blue"});
     $textBlocks.css({"outline":"2px solid red"});
     $navLi.css({"outline":"1px solid #67FF53"});
     $anchor.css({"outline":"1px dashed black"});
     $divButtonOn.css({"outline":"1px solid black"});
     
     return true;
  };

  function offOutline(){
     $div.css({"outline":0});
     $textBlocks.css({"outline":0});
     $navLi.css({"outline":0});
     $anchor.css({"outline":0});
     $divButtonOff.css({"outline":"1px solid black"});

     return true;
  };
  // /////////////////

  // Функции событий
  $on.on("click", function(){
     onOutline();
     localStorage.setItem("button_on",onOutline());
     localStorage.removeItem("button_off");
  }); 
  $off.on("click", function(){
     offOutline();
     localStorage.setItem("button_off",offOutline());
     localStorage.removeItem("button_on");
  });
  // ///////////

  // Функция записи/удаления значений в localstorage
+function checkStorage(){  
var btn_on = localStorage.getItem("button_on");
var btn_off = localStorage.getItem("button_off");

  if(btn_on == "true"){
    onOutline();
  }
  else if(btn_off == "true"){
    offOutline();
  }
  createBtn_1();
  createBtn_2();
}();

});// Окончание ready function