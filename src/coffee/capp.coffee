$(document).ready(() ->
  if $(window).width()<=550
    $("#fullpage").fullpage({
      scrollingSpeed: 500
    });
)
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
source = getUrlParameter('source')
u = navigator.userAgent
app = navigator.appVersion
isAndroid = u.indexOf('Android') > -1 or u.indexOf('Linux') > -1
isiOS = ! !u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
if isAndroid
  if source is 'wx'
    $('.download').attr('href', "http://kkche-res.oss-cn-qingdao.aliyuncs.com/pegasus-wx-release-1.0-100.apk")
  else if source is 'mob'
    $('.download').attr('href', "http://kkche-res.oss-cn-qingdao.aliyuncs.com/pegasus-mob-release-1.0-100.apk")
  else if source is 'pc'
    $('.download').attr('href', "http://kkche-res.oss-cn-qingdao.aliyuncs.com/pegasus-pc-release-1.0-100.apk")
  else
    $('.download').attr('href', "http://kkche-res.oss-cn-qingdao.aliyuncs.com/pegasus-mob-release-1.0-100.apk")
else if isiOS
  $('.download').attr('href','https://itunes.apple.com/cn/app/kan-che/id1019125496?mt=8')
else
  $('.download').attr('href','javascript:void(0)')
  $('.download').on('click',()->
    alert("不支持该机型")
  )
