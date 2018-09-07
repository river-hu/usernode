var express = require('express');
var  Demo = require('../public/javascripts/sql');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body.id)
    Demo.findById(req.body.id).then(demo => { //根据id查询数据
          console.log(JSON.stringify(demo))
          res.json(demo)
        })
});

module.exports = router;

