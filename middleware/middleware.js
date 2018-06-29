var Nonce = require('../models/nonce');

const middleware = {};

middleware.checkNonce = (req,res,next)=>{
    var nonceHash = req.body.oauth_nonce;
    console.log('nonceHash', nonceHash);
    if(!nonceHash){
      console.log('no nonce');
      req.nonceVerified = false;
      next();
    }else{
      Nonce.findOne({"nonceId":`${nonceHash}`},(err,foundNonce)=>{
        if(err){
          console.log('inside err')
          console.log(err)
        }else{
          console.log('foundNonce: ',foundNonce);         
          if(foundNonce!==null && foundNonce["nonceId"] === nonceHash){
            console.log('foundNonceID: ', foundNonce["nonceId"]);
            console.log('they are equal');
            req.nonceVerified = false;
            next();
          }else{
            Nonce.create({"nonceId":`${nonceHash}`},(err,createdNonce)=>{
              console.log(createdNonce);
              if(err){
                console.log(err)
              }else{
                console.log('returning true');
                req.nonceVerified = true;
                next();
              };
            })
          }
        }
      })
    }
  }

  module.exports = middleware;