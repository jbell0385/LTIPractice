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
    var cKey = "72397a6f8e18b80da92784ab3a1d981c";
    var cSecret = "6320fba80cd8c0b53fbc53c3a14fe619";
    var provider = new lti.Provider(cKey, cSecret);;
    provider.valid_request(req, function(err, isValid) {
      if(err){
          console.log("LTI Error", err, isValid)
      }
      res.send(isValid);
    });
})

module.exports = router;
