express  = require 'express'
capp = require './router/app'

router = express.Router()

router.get '/', (req, res, next) ->
  res.render 'index',
    title: 'index'


module.exports = (app) ->
  app.use '/', router
  app.use '/app',capp

browseHappy = (req, res, next) ->
  Sys = {}
  ua = req.headers['user-agent']
  s = undefined
  if (s = ua.match(/rv:([\d.]+)\)/)) then (Sys.IE = s[1]) else if (s = ua.match(/IE([\d.]+)/)) then (Sys.IE = s[1]) else if (s = ua.match(/micromessenger/)) then (Sys.WX = s[1]) else if (s = ua.match(/MSIE ([\d.]+)/)) then (Sys.IE = s[1]) else if (s = ua.match(/Firefox\/([\d.]+)/)) then (Sys.Firefox = s[1]) else if (s = ua.match(/Chrome\/([\d.]+)/)) then (Sys.Chrome = s[1]) else if (s = ua.match(/Opera.([\d.]+)/)) then (Sys.Opera = s[1]) else if (s = ua.match(/Safari\/([\d.]+)/)) then (Sys.Safari = s[1]) else 0
  console.log Sys
  next()
  return
router.use('/', (req, res, next)->
  browseHappy(req,res, next)
)
