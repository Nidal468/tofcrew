function play(){
					var audio = document.getElementById("myaudio-1");
					if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
};
function play2(){
					var audio2 = document.getElementById("myaudio-2");
					if (audio2.paused) {
        audio2.play();
    }else{
        audio2.currentTime = 0
    }
};
function play3(){
					var audio3 = document.getElementById("myaudio-3");
					if (audio3.paused) {
        audio3.play();
    }else{
        audio3.currentTime = 0
    } 
};
var btn =document.getElementById("btn");
var light =document.getElementById("light");
var bar =document.getElementById("bar");
var text =document.getElementById("text");
function togglebtn(){
btn.classList.toggle("active");
light.classList.toggle("on");
bar.classList.toggle("bar-on");
text.classList.toggle("text-on");
}
		   $(document).ready(function(){
		$('.sub-btn').click(function(){
		$(this).next('.sub-menu').slideToggle();
		});
		$('.menu-btn').click(function(){
			$('.slide-bar').addClass('active');
			$('.menu-btn').css("visibility", "hidden") 
			});
			$('.close-btn').click(function(){
			$('.slide-bar').removeClass('active');
			$('.menu-btn').css("visibility", "visible") 
			});
		});