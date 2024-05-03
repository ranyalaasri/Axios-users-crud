const express = require('express')
const router = express.Router()

const {GetById,AddNewUser,UpdateUser} = require('../controllers/users')



router.get('/:id',GetById)
router.get('/',AddNewUser)
router.put('/:id',UpdateUser)




module.exports = router









