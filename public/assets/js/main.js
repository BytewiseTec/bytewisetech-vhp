(function($) {
  'use strict'

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn()
    } else {
      $('.backtotop').stop(true, true).fadeOut()
    }
  })
  $('.scroll').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 0)
    return false 
  })
  // Back To Top - End
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $('.mobile_menu_btn').on('click', function(){
    $('.mobile_menu_btn > i').toggleClass('far fa-bars fa-solid fa-xmark')
  })
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original')
  }
  $(window).on('scroll', function () {
      if ($('.stricked-menu').length) {
          var headerScrollPos = 150
          var stricky = $('.stricked-menu')
          if ($(window).scrollTop() > headerScrollPos) {
              stricky.addClass('stricky-fixed')
          } else if ($(this).scrollTop() <= headerScrollPos) {
              stricky.removeClass('stricky-fixed')
          }
      }

  })

  // Sticky Header - End
  // --------------------------------------------------
})(jQuery)