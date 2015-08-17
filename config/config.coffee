path     = require 'path'
rootPath = path.normalize __dirname + '/..'
env      = process.env.NODE_ENV || 'dev'
config =

  dev:
    root: rootPath
    api:'http://api.idev.kkche.cn:81'
    app:
      name: 'express-test'
    port: 6300

  qa:
    root: rootPath
    api:'http://api.qa.kkche.cn'
    app:
      name: 'express-test'
    port: 6300

  release:
    root: rootPath
    api:'http://api.kanche.com'
    app:
      name: 'express-test'
    port: 6300


module.exports = config[env]

