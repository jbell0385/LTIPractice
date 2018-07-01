var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware');
var lti = require('ims-lti');

var cKey = "jeremysecret";
var cSecret = "jeremysecret";
// var nonceStore = new lti.Stores.MemoryStore();
// console.log("nonceStore: ",nonceStore);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', (req,res)=>{
  let provider = new lti.Provider("jeremysecret", "jeremysecret");
  provider.ext_content.send_iframe(res, "https://lti-sandbox.herokuapp.com/", "my App", 800, 800) 
})

module.exports = router;
