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
  var cKey = "codementorkey";
  var cSecret = "codementorsecret";
  // console.log(req.body);
  var val = req.body;
  // console.log(val);
  var provider = new lti.Provider(val, cSecret);
  //console.log(provider);
  provider.valid_request(req, function(err, isValid) {
    console.log("VAL: ",val);
    console.log("PROVIDER: ",provider);
    if(err){
        console.log("LTI Error", err, isValid)
    }
    //console.log(req.body);
    res.send(isValid);
  });

})

module.exports = router;
