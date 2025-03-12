const express = require('express')
const {handleURL, getURL} = require('../controllers/url')

const router = express.Router()

router.route("/")
.post(handleURL)

router.get('/:shortID', getURL);

module.exports = router;