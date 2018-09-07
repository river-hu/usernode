var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {    //获取所有正在连接的id
    res.header("Access-Control-Allow-Origin", "*");
  var ws = require("../bin/www")
  console.log(ws.sockets._events)
  let data = [];
  for(let i in ws.sockets._events){
      data.push({
        name:i
      } 
      )
  }
res.json(data)
});

module.exports = router;
