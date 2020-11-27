/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//banner for tsgroup
var myNode = document.getElementById('portfolioModal2');
var myNodeButton = myNode.getElementsByTagName('button');
var myBanner = document.createElement("li");
var bannerText = document.createTextNode("TS GROUP: Мы оказываем услуги технического содействия и руководства проектами на всех стадиях реализации объектов");
    myBanner.appendChild(bannerText);
    myBanner.style.color = "red";
myNodeButton[0].onmouseover = function(){
    myNode.querySelector('ul').appendChild(myBanner);
};