var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware');
var lti = require('ims-lti');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', middleware.checkNonce, (req,res)=>{
  res.send(req.body);
})

module.exports = router;
