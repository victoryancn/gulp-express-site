'use strict';
$(document).ready ()->
  getUrlParameter = (sParam) ->
    sPageURL = window.location.search.substring(1)
    sURLVariables = sPageURL.split('&')
    i = 0
    while i < sURLVariables.length
      sParameterName = sURLVariables[i].split('=')
      if sParameterName[0] == sParam
        return sParameterName[1]
      i++
    return
  $('.article-plus-one').on('click',(event)->
    whetherPlus = $('#whetherPlus').val() is "true"
    plusOneCount = $('.plusOneCount').eq(0).text()
    if whetherPlus
      cate = 'minus'
    else
      cate = 'plus'
    ajaxData =
      articleId : getUrlParameter('articleId')
      category : cate
    $.ajax({
      type: "POST"
      url: "@@API/cms/article/plusOne"
      headers:
        "X-AUTH-TOKEN":getUrlParameter('token')
      dataType:'json'
      contentType: "application/json; charset=utf-8"
      data: JSON.stringify(ajaxData)
    }).success(( msg ) ->
      if whetherPlus
        $('#plusOne').attr('src', "/res/image/article/dicover_detail_like_icon.png")
        $('#plusOneText').text('取消成功')
        $('.article-alert').fadeIn().delay(500).fadeOut()
        $('.plusOneCount').text(parseInt(plusOneCount)-1)
        $('#whetherPlus').val("false")
      else
        $('#plusOne').attr('src', "/res/image/article/dicover_detail_like_icon1.png")
        $('#plusOneText').text('点赞成功')
        $('.article-alert').fadeIn().delay(500).fadeOut()
        $('.plusOneCount').text(parseInt(plusOneCount)+1)
        $('#whetherPlus').val("true")
    ).error((msg)->
    )
    event.stopPropagation()
  )

