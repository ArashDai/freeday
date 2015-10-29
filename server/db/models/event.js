var Sequelize = require('sequelize');
var sequelize = require('../connection');

var Event = sequelize.define('event',{
  user:{
    type:Sequelize.STRING,
    field:'user'
  },
  category:{
    type:Sequelize.STRING,
    field:'category'
  },
  time:{
    type:Sequelize.STRING,
    field:'time'
  },
  description:{
    type:Sequelize.STRING,
    field:'description'
  },
  location:{
    type:Sequelize.STRING,
    field:'location'
  },
  tags:{
    type: Sequelize.ARRAY(Sequelize.STRING),
    field:'tags'
  }

});
module.exports = Event;
