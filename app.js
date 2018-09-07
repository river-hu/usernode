var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
var byidRouter = require('./routes/byid');
var getRouter = require('./routes/gettest');
var socket = require('./routes/socket');
var selectname = require('./routes/selectname');
var getgroup = require('./routes/getgroup');
var content = require('./routes/content');

// const Op = Sequelize.Op;

// Demo.create({  //插入数据
//   name: "vu阿萨德e",
//   sex: 1,
//   age: 16,
//   userdec: "ahskfh跨阿萨德as世"
// }).then(function (data) {
//   console.log(JSON.stringify(data));
// }).catch(function () {

// })


// Demo.findAll().then(demo => { // 查询所有数据
//   console.log(JSON.stringify(demo))
// })
// Demo.findById(2).then(demo => { //根据id查询数据
//   console.log(JSON.stringify(demo))
// })
// Demo.findOne({
//   where: { age: 23 },
//   attributes: ['id',"name","sex"]
// }).then(data => {
//   console.log(JSON.stringify(data))
// })
// Demo.findAndCountAll({
//   where: { age: 23 }
// }).then(data=>{
//   console.log(JSON.stringify(data));
// })
// Demo.findAll({where:{
//   name:{
//     [Op.like]:"%vue%"
//   }
// }}).then(data=>{
//   console.log(JSON.stringify(data))
// })
// force: true will drop the table if it already exists
// Demo.sync({force: true}).then(() => {
//   // Table created
//   return User.create({   //创建数据表，若存在也会创建
//     name: 'John',
//     sex: 0,
//     age:18,
//     userdec:"test"
//   });
// });

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);
app.use('/byid', byidRouter);
app.use('/gettest', getRouter);
app.use('/socket', socket);
app.use('/selectname', selectname);
app.use('/getgroup', getgroup);
app.use('/content', content);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
