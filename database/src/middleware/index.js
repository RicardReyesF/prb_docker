

const validation = (req,res,next) => {
    const { model } = req.params
    if(["Characters","Films","Planets"].includes(model)){
        return next()
    }else{
        throw Error("No esta pasando nada doctor")
    }
}

module.exports = validation;