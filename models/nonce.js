
var mongoose=require("mongoose");


var nonceSchema = new mongoose.Schema({
    createdAt:{type:Date, default:Date.now},
    nonceId:String
})


var Nonce = mongoose.model("Nonce", nonceSchema);



module.exports = Nonce;