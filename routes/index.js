var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware');
var lti = require('ims-lti');

var cKey = "bbdf109cbc65fd11658b2a9c9d2fab9b";
var cSecret = "1923358240917d4f82e7d0d2c3522195";



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', (req,res)=>{
  const provider = new lti.Provider(cKey, cSecret);
  provider.valid_request(req, (err, isValid)=>{
    if(err){console.log(err)};
    console.log("req: ",req);
    console.log("isValid: ",isValid);
  });
  console.log("provider: ",provider);
  res.send(req.body);
})

module.exports = router;
