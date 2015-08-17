config     = require './config'

BASE_API = config.api
API =
  VEHICLE_SEARCH_GET : BASE_API + '/es/vehicle/get'
  VEHICLE_SEARCH : BASE_API + '/es/vehicle/search'
  ARTICLE_GET : BASE_API + '/cms/article/read'

module.exports = API
