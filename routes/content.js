var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {    //获取id
    let name = req.query.name;
    console.log(name);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(name)

});

module.exports = router;
