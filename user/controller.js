const userModel = require('./model');

const userController = {
    authParams:(req,res,next) => {
        /*if (req.params.id === 1) {
            next()
        } else {
            res.status(401).json({
                msg:' not Auth',
                err:'params is not 1'
            })
        }*/
        next()
    },
    paramsID:(req, res, next) => {
        res.locals.id = req.params.id
        next()
    },
    findOne:(req, res) => {
        userModel.find({
            mail:req.params.mail,
            name:'daniel',
        }).then(response => {
            res.json({
                response
            })
        })
    },
    getUser:(req, res) => {    
        userModel.findAll({}).then(response => {
            res.json({
                response
            })
        })
    },
    createUser:async(req, res) =>{
        const resposne =  await userModel.create(req.body)
        res.status(201).json({
            _id: response._id
        })
    }
}

module.exports = userController;