const express = require('express')
const router = express.Router()
const { createPincode } = require('../controllers/createPincode.controller.js')

router.route('/pincode').post(createPincode)

module.exports = router
