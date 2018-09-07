const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodetest', 'root', 'root', { //链接数据库
  host: 'localhost', //数据库的地址
  dialect: 'mysql', //数据库的类型
  operatorsAliases: false, //是否设置字符串别名
  type: "json",  //
  pool: {  //数据库连接池
    max: 5, //最大连接数
    min: 0, //最小连接数
    acquire: 30000, // 
    idle: 10000 //
  }
});
const Demo = sequelize.define('demo', {  //定义模型
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true  //定义主键
  },
  name: {
    type: Sequelize.STRING
  },
  sex: {
    type: Sequelize.TINYINT  //定义字段的数据类型
  },
  age: {
    type: Sequelize.TINYINT
  },
  userdec: {
    type: Sequelize.TEXT
  }
}, {
    timestamps: false   //取消插入的时间格式数据
  });
  module.exports = Demo;