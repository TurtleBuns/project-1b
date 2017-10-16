console.log("hello");







$(document).ready(function(){
  $(function(){
    var slideNum = 0;
    var win = $(window).width();
    if (win <= 600){
      slideNum = 1;
      console.log("max slide is 1")
    }else if (win <= 1024){
      slideNum = 2;
      console.log("max slide is 2")
    }else{
      slideNum = 4;
      console.log("max slide 4")
    }
    console.log(slideNum, win/slideNum);
    window.slider = $('.bxslider').bxSlider({
          slideWidth:win/slideNum,
          maxSlides: slideNum
      });
  });

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  $(window).on('resize', function(){
    var win = $(window).width();
    var slideNum = 0;
    if (win <= 600){
      slideNum = 1;
      console.log("max slide is 1")
    }else if (win <= 1024){
      slideNum = 2;
      console.log("max slide is 2")
    }else{
      slideNum = 4;
      console.log("max slide 4")
    }
    console.log(slideNum, win/slideNum);
    window.slider.reloadSlider({
          slideWidth:win/slideNum,
          maxSlides: slideNum
      });

  });
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid :)");
    $("#result").css("color", "green");
    console.log("valid email");
  } else {
    $("#result").text(email + " is not valid :(");
    $("#result").css("color", "red");
    console.log("invalid email");
  }
  return false;
}

$("#validate").bind("click", validate);

});
