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

    $('.carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1
    })

    $('.review-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        items: 1
    })


    $('.price__button').hover(
        function(){
            $('.price__month').css('background-color','red');
            $('.price__month').css('transition','0.3s cubic-bezier(0.250, 0.100, 0.250, 1.000)');
        },
        function(){
            $('.price__month').css('background-color','#5b6ceb');
        }
    )

});



