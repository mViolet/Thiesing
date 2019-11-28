function openModal() {
	document.getElementById('my-modal').style.display="inline-flex";
}

function closeModal() {
	document.getElementById('my-modal').style.display="none";
}

/* set a slideIndexJS var to 1 & pass to main showSlides function */
var slideIndexJS = 1;
showSlides(slideIndexJS);

function changeSlides(n) {  //next & prev buttons
	showSlides(slideIndexJS += n); //gets value for n from html
}

function currentSlide(n) {  //displays img for thumbnail clicked
	showSlides(slideIndexJS = n);
}

/* this is the main function which operates the viewer */
function showSlides(n) {
	var i;
	var slidesJS = document.getElementsByClassName("my-slides");  //gets all elements with class my-slides

	if (n > slidesJS.length) {  //overflow & underflow
		slideIndexJS = 1;
	}

	if (n < 1) {
		slideIndexJS = slidesJS.length;
	}

	for (i = 0; i < slidesJS.length; i++) {
		slidesJS[i].style.display = "none";   //hide all slides at first
	}

	slidesJS[slideIndexJS - 1].style.display = "block"; //show the one that is clicked. -1 because js counts from 0
}




