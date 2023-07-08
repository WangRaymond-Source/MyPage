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