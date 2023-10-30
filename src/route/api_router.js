const express = require('express');
const router = express.Router();
const apiController = require('../controller/api_controller')


// [GET] /api/Hello
router.get('/Hello', apiController.greeting)

// [GET] /api/:slug
router.get('/:slug', apiController.dateInput)

// [GET] /api/
router.get('/', apiController.currentTime)

module.exports = router;
