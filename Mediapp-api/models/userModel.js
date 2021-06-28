const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
Schema = mongoose.Schema

let user = new Schema({
    username: {
        type: String,
        required: true
    },
    hash_password: {
        type: String,
    },
    created:{
        type: Date,
        default: Date.now
    }
})

user.methods.comparePassword = (password)=>{
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('User', user, 'Users')