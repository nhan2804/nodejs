const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newController');
router.get('/create',newsController.create);
router.post('/insert',newsController.insert);
router.get('/:slug',newsController.detail);
router.get('/',newsController.index);

module.exports = router;
