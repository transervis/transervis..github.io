$(document).ready(function(){
    $('a[data-rel^=lightcase]').lightcase({
        shrinkFactor : 0.8,
        maxWidth : '100%',
        maxHeight : '100%',
        swipe: true,
        showSequenceInfo: false,
        iframe: {
            width: 1280,
            height: 720,
            frameborder: 0
        }
    });
    $('.image_slider').each(function() {
        var slider = $(this).bxSlider({
            pager: true,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 576,
            slideMargin: 0,
            showTitle: false,
            showSequenceInfo: false,
            showCaption: false,
            infiniteLoop: true
        });
        $(this).parents('.gallery-block').children('.next').click(function () {
            slider.goToNextSlide();
            return false;
        });
        $(this).parents('.gallery-block').children('.previous').click(function () {
            slider.goToPrevSlide();
            return false;
        });
    });


    /*var $sliders = $('.js__step_slider');
     $sliders.each(function(){
     var $slider = $(this);

     $('[data-items]', $slider).slick({
     infinite: false,
     slidesToShow: 4,
     slidesToScroll: 1,
     centerMode: false,
     centerPadding: '50px',
     draggable: false,
     prevArrow: $('[data-prev]', $slider),
     nextArrow: $('[data-next]', $slider)
     });
     });

     // Вот такое вот издевательство, когда слик-слайдер разбит по вкладкам
     var interval = setInterval(function(){
     var $notInitialized = $sliders.find('[data-items]:not(.slick-initialized)');
     if(!$notInitialized.length)
     {
     clearInterval(interval);
     setTimeout(function(){
     $sliders.removeClass('active').addClass('inited');
     $('.js__step_slider:first').addClass('active');
     }, 500)
     }
     }, 100);*/
});