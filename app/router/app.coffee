express = require('express')
router = express.Router()

router.get '/', (req, res, next) ->
  res.render 'app',title:'看车网'
module.exports = router
