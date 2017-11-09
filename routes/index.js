var express = require('express');
var router = express.Router();
var fs  = require('fs') ;
var path = require('path') ;
/* GET home page. */
// console.dir(path.dirname('a.html'));

router.get('/', function(req, res, next) {
   res.sendFile(path.join(path.resolve('statichtmls','a.html')))
});

module.exports = router;
