


var express = require('express');
var router = express.Router();
var models = require('../models/');

router.get('/:url_name', function(req,res)  {
// we ca use req.param.page_title
// to find from the db
// then asynchronously call render
var url_name = req.params.url_name;
console.log(url_name);
	models.Page.findOne({url_name:req.params.url_name}, function(err, pages)  {

		res.render('show', {pages:pages});
	});
});

module.exports = router;