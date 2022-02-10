window.onload = function(){





	menuMobile();

	//Botoes
	
	

	//link
	const target = document.getElementsByTagName("target");
	const linkMenu = document.querySelectorAll("nav ul li a");
	const linkMenuMobile = document.querySelectorAll("nav.menu-mobile ul li a");
	



	for(i = 0; i < target.length; i++){

		

		if(document.getElementById("sobreT")){

			//font-weight: bold; color: #5b98d7;
			scrollTo("#sobre");
			

			desmarcarLinkMenu();
			linkMenu[2].style.fontWeight = "bold";
			linkMenuMobile[1].style.fontWeight = "bold";
		}else if(document.getElementById("contatoT")){

			scrollTo("#contato");

			desmarcarLinkMenu();
			linkMenu[0].style.fontWeight = "bold";
			linkMenuMobile[3].style.fontWeight = "bold";
		}else if(document.getElementById("servicoT")){
			scrollTo("#servicos");

			desmarcarLinkMenu();
			linkMenu[1].style.fontWeight = "bold";
			linkMenuMobile[2].style.fontWeight = "bold";
		}
		}


	function scrollTo(element){
		document.querySelector(element).scrollIntoView({behavior: "smooth"});
	}


	function desmarcarLinkMenu(){
		for(var i = 0; i < linkMenu.length; i++){
			linkMenu[i].style.fontWeight = "300";
		}
		
	}

	/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
/*function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};*/

	function menuMobile(){

				var menu_mobile = document.querySelector("nav.menu-mobile");
				let menuAtivado = false;

				menu_mobile.addEventListener("click", ()=>{
					

					if(menuAtivado == false){
						document.querySelector("nav.menu-mobile ul").style.display = "block";
						menuAtivado = true;
					}else{
						document.querySelector("nav.menu-mobile ul").style.display = "none";
						menuAtivado = false;
					}
					


				})

	}






}