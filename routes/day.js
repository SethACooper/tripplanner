var express = require('express');
var router = express.Router();
var models = require('../models')

router.post('/', function(req,res){
  //...create day...
});

router.post('/:dayId/attractions',function(req,res){
  //...add an attraction to day...
});

router.get('/', function(req,res){
  //...list all days...
});

module.exports = router;