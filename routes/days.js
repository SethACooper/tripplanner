var express = require('express');
var router = express.Router();
var models = require('../models')

router.post('/', function(req,res,next){
  var tempDay = new model.Day(req.body);
  tempDay.save(function(err,day){
    if(err) return next(err);
    res.json(day);
  });
})

router.post('/:dayId/activities',function(req,res,next){
  //...add an attraction to day...
});

router.get('/', function(req,res,next){
  //...list all days...
});

module.exports = router;