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
  var cKey = "7c2591554c0f0a0be6f1e76aa3d10c9a";
  var cSecret = "c84ff8b56f981f23dbed5abd4b8793ce";
  var val = req.body;
  var provider = new lti.Provider(cKey, cSecret);
  console.log("VAL: ",val);
  provider.valid_request(req, function(err, isValid) {
    if(err){
        console.log("LTI Error", err, isValid)
    }
    res.send(req.body);
  });

})

module.exports = router;
