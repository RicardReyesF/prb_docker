const { Router } = require('express')
const schema = require('../database/index')
const validation = require('../middleware/index')
const router = Router()

router.get('/:model', validation, async (req,res) => {

    const { model } = req.params;
    console.log(model);
    const  response = await schema[model].list()
    res.status(200).json(response);
})

module.exports = router