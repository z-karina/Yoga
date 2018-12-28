$(document).ready(function () {

    $(".menu__link").mPageScroll2id();

    // $('.slider__item').height($(window).height());

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

    $('.carousel, .trainer__slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1
    })

    $('.blockquote-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        items: 1
    })


    let el1 = $('.price__button:eq(0)')
    let el2 = $('.price__button:eq(1)')
    let el3 = $('.price__button:eq(2)')
    el1.hover(
        function(){
            $('.price__month:eq(0)').css('background-color','#475bf1');
        },

        function(){
            $('.price__month').css('background-color','#5b6ceb');
        }
    )
    el2.hover(
        function(){
            $('.price__month:eq(1)').css('background-color','#475bf1');
        },

        function(){
            $('.price__month').css('background-color','#5b6ceb');
        }
    )
    el3.hover(
        function(){
            $('.price__month:eq(2)').css('background-color','#475bf1');
        },

        function(){
            $('.price__month').css('background-color','#5b6ceb');
        }
    )

});



