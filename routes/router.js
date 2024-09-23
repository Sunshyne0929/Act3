const express = require('express');
const router = express.Router();
const sun = require('../controller/sunController.js');
router.get('/', sun.ind);
router.get('/shop', sun.shp);
router.get('/about', sun.abt);
router.get('/services', sun.srv);
router.get('/blog', sun.blg);

module.exports = router;
