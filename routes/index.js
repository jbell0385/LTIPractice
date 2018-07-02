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
  var cKey = "96619f9a881aba6bda3d70f3e0eef6b3";
  var cSecret = "108bcbd1b66458d36ce77dccd04bf601";
  var nonce_store = "MemoryStore";
  var provider = new lti.Provider(cKey, cSecret, nonce_store);
  console.log(provider);
  // provider.valid_request(req, function(err, isValid) {
  //   if(err){
  //       console.log("LTI Error", err, isValid)
  //   }
  //   console.log(req.body);
  //   res.send(isValid);
  // });

})

module.exports = router;
