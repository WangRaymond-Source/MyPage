function hello(){
    console.log("hello");
    return;
}
//clickable script for nav bar for home page
document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.header a');

    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        //prevent instant transfer to the particular section
        event.preventDefault();
        var target = this.getAttribute('href');
        var targetElement = document.querySelector(target);
        //if element exist scroll smoothly to the section of the page
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
});
//image slider functions
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}