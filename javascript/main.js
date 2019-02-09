/*jslint browser: true*/
/*global $, window,document, AOS*/

$(document).ready(function () {
    "use strict";
    
    AOS.init();
    $('[data-toggle="tooltip"]').tooltip();
    
    //smooth scroll
    
     $("body").niceScroll({
        cursorcolor: "#1abc9c"
        
    });
    
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

      
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {
   
                window.location.hash = hash;
            });
        }
    });
    
    
    /*** Portfolio responsive **/
   
    $(".work ul .mobile").on("click", () => {
       
        $(".work .pc").css("display", "none");
        $(".work .mob").css("display", "block");
    
    });
    
    $(".work ul .all").on("click", () => {
       
        $(".work .pc").css("display", "block");
        $(".work .mob").css("display", "block");
    
    });
    
    $(".work ul .comp").on("click", () => {
       
        $(".work .pc").css("display", "block");
        $(".work .mob").css("display", "none");
    
    });

});


/**/

var navButton = document.querySelector(".navigation-button");
var navMenu = document.querySelector(".navigation-menu");
var win = window;

function openMenu(event) {
    
    "use strict";
    navButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    event.preventDefault();
    event.stopImmediatePropagation();
}

function closeMenu(event) {
    "use strict";
    if (navButton.classList.contains("active")) {
        navButton.classList.remove("active");
        navMenu.classList.remove("active");
        
    }
}

navButton.addEventListener("click", openMenu, false);
win.addEventListener("click", closeMenu, false);