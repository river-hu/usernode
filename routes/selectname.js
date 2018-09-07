var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  var ws = require("../bin/www")
  var checkNickname = function(name){   //检查昵称是否重复
    for(var k in ws.sockets.sockets){
        if(ws.sockets.sockets.hasOwnProperty(k)){
            if(ws.sockets.sockets[k] && ws.sockets.sockets[k].nickname == name){
                return true;
            }
        }
    }   
    return false;
}

res.send(checkNickname(req.query.name))
// res.send(req.query)
});

module.exports = router;
