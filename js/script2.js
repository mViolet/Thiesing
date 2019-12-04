function openModal2() {
	document.getElementById('my-modal2').style.display="inline-flex";
}

function closeModal2() {
	document.getElementById('my-modal2').style.display="none";
}

/* set a slideIndexJS var to 1 & pass to main showSlides function */
var slideIndexJS2 = 1;
showSlides2(slideIndexJS2);

function changeSlides2(n) {  //next & prev buttons
	showSlides2(slideIndexJS2 += n); //gets value for n from html
}

function currentSlide2(n) {  //displays img for thumbnail clicked
	showSlides2(slideIndexJS2 = n);
}

/* this is the main function which operates the viewer */
function showSlides2(n) {
	var i;
	var slidesJS2 = document.getElementsByClassName("my-slides2");  //gets all elements with class my-slides

	if (n > slidesJS2.length) {  //overflow & underflow
		slideIndexJS2 = 1;
	}

	if (n < 1) {
		slideIndexJS2 = slidesJS2.length;
	}

	for (i = 0; i < slidesJS2.length; i++) {
		slidesJS2[i].style.display = "none";   //hide all slides at first
	}

	slidesJS2[slideIndexJS2 - 1].style.display = "block"; //show the one that is clicked. -1 because js counts from 0
}




