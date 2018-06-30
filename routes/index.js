var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware');
var lti = require('ims-lti');

var cKey = "bbdf109cbc65fd11658b2a9c9d2fab9b";
var cSecret = "1923358240917d4f82e7d0d2c3522195";
// var nonceStore = new lti.Stores.MemoryStore();
// console.log("nonceStore: ",nonceStore);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', (req,res)=>{
  let provider = new lti.Provider(cKey, cSecret);
  provider.valid_request(req, (err, isValid)=>{
    if(err){console.log(err)};
    res.send(isValid);
  });
})

module.exports = router;
