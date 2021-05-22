const mongoose = require('mongoose')

const {isEmail,isAlpha,isInt}= require('validator')

const Report = require('./Report')
const tankSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please enter an email'],
        lowercase:true,
        validate:[isEmail,'Invalid email']
    },
    area:{
        type:String,
        required:[true,'Please enter an area'],
        lowercase:true
    },
    no:{
        type:String,
        validate:[isInt,'Invalid value']
    },
    tds:{
        type:String,
        required:true,
        validate:isInt,
        default:'0'
    },
    turbidity:{
        type:String,
        required:true,
        validate:isInt,
        default:'0'
    },
    level:{
        type:String,
        required:true,
        validate:isInt,
        default:'0'
    },
    usage:{
        type:String,
        required:true,
        validate:isInt,
        default:'0'
    },
    issue:{
        tupe:Boolean,
        default:false,
    },
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
})

tankSchema.pre('updateOne',function(next){
    now = new Date()

    email=this._conditions.email
    no = this._conditions.no
    day = ((now).getDate())
    dailyUsage = this._update.usage
})
