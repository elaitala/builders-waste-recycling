const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
// const mw = require('../middleware');
// PATH = /api/v1/trailers

// GET TRAILER by ID
router.get('/', ctrl.trailers.show);
// Update profile by ID
router.put('/update', ctrl.trailers.update);



module.exports = router;