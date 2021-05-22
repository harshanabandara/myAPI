const mongoose = require('mongoose')
const {isEmail,isInt} = require('validator')
const reportSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true],
        lowercase:true,
        validate : [isEmail,'Invalid email']

    },
    no:{
        type:String,
        validate:[isInt,'invalid value']
    },
    monthlyUsage : [String]
})

const report = mongoose.model('report',reportSchema);

module.exports = report