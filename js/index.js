/**
* Created by Matteo Remondini - Service Design Today
*/



////-----------------------------------------------------
//browser update
var $buoop = {vs:{i:11,f:49,o:30,s:6,c:25},  // specify minimum browser versions to notify
    reminder: 1,                   // after how many hours should the message reappear
                                    // 0 = show all the time
    test: false,                    // true = always show the bar (for testing)
    text: "This website is not supported by your browser (%s).  Please <a%s>update</a>."
    ,c:4}; 
function $buo_f(){ 
 var e = document.createElement("script"); 
 e.src = "//browser-update.org/update.min.js"; 
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}


////-----------------------------------------------------
//scroll To
			 
 $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
            e.preventDefault();
        }
    }
});


////-----------------------------------------------------
//menu show more

$( "#topmenu2" ).click(function() {
    $('.menu' ).slideToggle( "slow" );
    });

////-----------------------------------------------------
//scroll to top Button
//

var amountScrolled = 500;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});



////-----------------------------------------------------
//progress bar

$(document).ready(function() {
  var docHeight = $(document).height(),
  windowHeight = $(window).height(),
  scrollPercent;

  $(window).scroll(function() {
    scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

    $('.scroll-progress').width(scrollPercent + '%');
    });
    });



//-----------------------------------------------------
// Fade in Elements when scrolled

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});




////-----------------------------------------------------
//
// Fadein On load Homepage

$(function() {
    $('body').removeClass('fade-out');
});



////-----------------------------------------------------
//
// scroll snap to


	$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        lockAnchors: false,
       // anchors:['homehome', 'home'],
        anchors: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        hybrid:true,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Custom selectors
        sectionSelector: '.section',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});
