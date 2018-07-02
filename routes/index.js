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
    var cKey = "d9c32887678fed93aaf76c0376a30988";
    var cSecret = "1454e9815d3b46e785b064c3202e6baf";
    var ltiBody = JSON.parse(req.body);
    var provider = new lti.Provider(cKey, cSecret);;
    provider.valid_request(req, ltiBody, function(err, isValid) {
      if(err){
          console.log("LTI Error", err, isValid)
      }
      res.send(isValid);
    });
})

module.exports = router;
