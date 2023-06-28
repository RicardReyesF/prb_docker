const {Router} = require('express') 
const controller = require('../controllers')

const router = Router()

router.get('/characters',controller.getCharacters)

module.exports = router;