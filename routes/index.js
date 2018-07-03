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
<<<<<<< HEAD
  var cKey = "7c2591554c0f0a0be6f1e76aa3d10c9a";
  var cSecret = "c84ff8b56f981f23dbed5abd4b8793ce";
=======
  var cKey = "b2bd83902abd2a21ac6b74500ec1e82e";
  var cSecret = "632b44b905ad948e7336f7434294eb09";
  // console.log(req.body);
>>>>>>> 9ac7c0499da28b8e3acbd40854048213a4aef084
  var val = req.body;
  var provider = new lti.Provider(cKey, cSecret);
  console.log("VAL: ",val);
  provider.valid_request(req, function(err, isValid) {
    if(err){
        console.log("LTI Error", err, isValid)
    }
<<<<<<< HEAD
    res.send(req.body);
=======
    //console.log(req.body);
    res.send(isValid);
>>>>>>> 9ac7c0499da28b8e3acbd40854048213a4aef084
  });

})

module.exports = router;
