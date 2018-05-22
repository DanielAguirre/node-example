const mongoose  = require('mongoose')
const userModel = mongoose.model('User')

const model  = {
    find:(query) =>{
        return userModel.find(query)
    },
    findAll:() => {
        return userModel.find({})
    },
    create: (user) => {
        return userModel.create(user)
    },
}

module.exports = model