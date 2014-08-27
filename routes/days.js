var express = require('express');
var router = express.Router();

var models = require('../models')

// /days/
router.post('/',function(req,res,next) {
  //models.Day.create() another way
  var tempDay = new models.Day(req.body);
  tempDay.save(function(err,day) {
    if(err) return next(err);
    res.json(day);
  });
})


module.exports = router;