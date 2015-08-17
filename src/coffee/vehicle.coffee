'use strict'
$(document).ready ->
#slick
  $('.vehicle-img-slick').slick(
    arrows: false
    infinite: false
    mobileFirst: true
    dots: false
    speed: 200
  ).on 'afterChange', (slick, index) ->
    $('#vehicle-img-pos').text index.currentSlide + 1

  #spec info
  $('.vehicle-spec-info-title').find('a').on 'touchstart', (target) ->
    $(this).siblings().removeClass 'active'
    $(this).addClass 'active'
    index = $(this).index()
    $('.vehicle-spec-info-table').removeClass('active').eq(index).addClass('active')

  $('.vehicle-detail-info-title').find('a').on 'touchstart', (target) ->
    $(this).siblings().removeClass 'active'
    $(this).addClass 'active'
    index = $(this).index()
    $('.vehicle-detail-table').removeClass('active').eq(index).addClass 'active'


