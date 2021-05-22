const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const roleValidator = (val) =>{
    if(val.toString() == "user"){
        return true
    }
    return false
}

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please enter an email'],
        uniquie = true,
        lowercase = true,
        validate : [isEmail,'Invalid Email']
    },
    password:{
        type:String,
        required:[true,'Please Enter a password'],
        minlength:[6,'Minimum length is 6 characters']
    },
    role:{
        type:String,
        required:[true,'Please enter  user role'],
        lowercase:true,
        validate:[roleValidator,'Enter a valid role'],
        isVerified:{
            type:Boolean,
            default:false
        }
    }
})


userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user
        }
        throw Error('Incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('user',userSchema)

module.exports = User