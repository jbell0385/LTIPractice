var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware');
var lti = require('ims-lti');


// var nonceStore = new lti.Stores.MemoryStore();
// console.log("nonceStore: ",nonceStore);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', (req,res)=>{
  var cKey = "9da5e474af4430ccbcf1e948e244717d";
  var cSecret = "308e962f3eec52178395b48322a62d4a";
  var provider = new lti.Provider(cKey, cSecret);
  provider.valid_request(req, function(err, isValid) {
    if(err){
        console.log("LTI Error", err, isValid)
    }
    console.log(req.body);
    res.send(isValid);
  });

})

module.exports = router;
