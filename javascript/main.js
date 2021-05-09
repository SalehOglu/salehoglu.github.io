/*jslint browser: true*/
/*global $, window,document, AOS*/

$(document).ready(function() {
    "use strict";

    AOS.init();
    $('[data-toggle="tooltip"]').tooltip();

    //smooth scroll

    $("body").niceScroll({
        cursorcolor: "#1abc9c"

    });

    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();



            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function() {

                window.location.hash = hash;


            });
        }
    }, { passive: false });

    /****** Spinner loading ********/


    $("#fakeLoader").fakeLoader({
        timeToHide: 3000,
        zIndex: 999999,
        spinner: "spinner2",
        bgColor: "none"
    });



    /*** Portfolio responsive **/

    $(".work ul .mobile").on("click", function() {

        $(".work .pc").css("display", "none");
        $(".work .mob").css("display", "block");

    });

    $(".work ul .all").on("click", function() {

        $(".work .pc").css("display", "block");
        $(".work .mob").css("display", "block");

    });

    $(".work ul .comp").on("click", function() {

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

function closeMenu() {
    "use strict";
    if (navButton.classList.contains("active")) {
        navButton.classList.remove("active");
        navMenu.classList.remove("active");

    }
}

navButton.addEventListener("click", openMenu, false);
win.addEventListener("click", closeMenu, false);

window.addEventListener("mousewheel", function(event) { event.preventDefault(); }, { passive: false });