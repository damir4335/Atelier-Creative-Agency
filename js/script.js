let ellipsis_menu = document.querySelector('.ellipsis_menu');
let mobile_links = document.querySelector('.mobile_links');
ellipsis_menu.addEventListener('click', function(){
	mobile_links.classList.toggle('active');
});

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slide = document.querySelector('.slide');
// let widthPage = document.querySelector('.page').offsetParent;
let widthPage = window.innerWidth;
// alert(widthPage)
let x = slide.offsetWidth / 3;
const width = window.innerWidth;
next.addEventListener('click', function(){
	if (widthPage <= 1150 && widthPage > 770) {
		if(x < 7141){
			slide.style.right = Math.trunc(x) + "px";
			x = x  + slide.offsetWidth / 3 - 22;
			console.log(Math.trunc(x) );
		}
	}else if(widthPage <= 770 && widthPage > 400){
		if(x < 7516){
			slide.style.right = Math.trunc(x) + "px";
			x = x  + slide.offsetWidth / 3 - 22;
			console.log(Math.trunc(x) );
		}
	}else if(widthPage <= 400){
		if(x < 7891){
			slide.style.right = Math.trunc(x) + "px";
			x = x  + slide.offsetWidth / 3 - 22;
			console.log(Math.trunc(x) );
		}
	}
})


prev.addEventListener('click', function(){
	if (x > 0) {
		slide.style.right = x + "px";
		x = x  - slide.offsetWidth / 3 + 22;
		console.log(x);
	}
})

