document.addEventListener("DOMContentLoaded",function(){
	var sliderClick = document.getElementsByClassName('slider__header');
	for (var i = sliderClick.length - 1; i >= 0; i--) {
		sliderClick[i].onclick = function(){
			for (var i = sliderClick.length - 1; i >= 0; i--) {
				if(sliderClick[i]!==this){
					var target = sliderClick[i].getAttribute('data-open');
					var targetHTML = document.getElementById(target);
					targetHTML.classList.remove('open');
				}
			}
			var targetOpen = this.getAttribute('data-open');
			var targetOpenHTML = document.getElementById(targetOpen);
			targetOpenHTML.classList.toggle('open');
		}
	}
},false);