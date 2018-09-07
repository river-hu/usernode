var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {    //获取所有正在连接的id
    res.header("Access-Control-Allow-Origin", "*");
  var ws = require("../bin/www")
  var getAllNickname = function(){
    var result = [];
    for(var k in ws.sockets.sockets){
        if(ws.sockets.sockets.hasOwnProperty(k)){
            result.push({
                name: ws.sockets.sockets[k].nickname
            });
        }
    }
    return result;
}

let jsonname = getAllNickname();
for(let i in jsonname){
  if(!jsonname[i].name){
    jsonname.splice(i,1)
  }
}
console.log(getAllNickname())
res.json(jsonname)
});

module.exports = router;
