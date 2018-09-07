var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a rfdsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffesource post');

});
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource post + get');
//     console.log("test")
// });

module.exports = router;
