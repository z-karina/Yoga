$(document).ready(function () {

    $('.slider__item').height($(window).height());

    $('.slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});