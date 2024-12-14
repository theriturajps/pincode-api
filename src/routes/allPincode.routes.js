const express = require('express')
const router = express.Router()
const { getAllPincode } = require('../controllers/allPincode.controller.js')

router.route('/pincode').get(getAllPincode)

module.exports = router
