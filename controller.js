const controller = {
    authParams:(req,res,next) =>{
        console.log('is here', req.path)
        if(req.params.id === 1){
            next()
        } else {
            res.status(401).json({
                msg:' not Auth',
                err:'params is not 1'
            })
        }
    },
    paramsID:(req, res, next) =>{
        console.log('id',req.app)
        res.locals.id = req.params.id
        next()
    },
    getParams:(req, res) =>{
        res.json({
            msg:`your in / ${res.locals.id}`
            })
    },
    postParams:(req, res) =>{
        res.json({
            msg:`your in param /${res.locals.id}`,
            q: `query ${req.query.next}`,
            body:req.body.x
        })
    }  
}

module.exports = controller;