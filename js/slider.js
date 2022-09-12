let slideIndex = [1,1,1,1,1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}

let autoSlideIndex = 0;
showAutoSlides();

function showAutoSlides() {
    let i;
    let slides = document.getElementsByClassName("autoSlides");
    console.log(slides.length);
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if(autoSlideIndex > slides.length) {
        autoSlideIndex = 1;
    }

    slides[autoSlideIndex-1].style.display = "block";
    setTimeout(showAutoSlides, 4000);
}