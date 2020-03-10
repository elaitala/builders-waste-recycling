const express = require('express')
const router = express.Router();
// const mw = require('../middleware');
const ctrl = require('../controllers');
// PATH = '/api/v1/jobs'

// CREATE Single JOB
router.post('/create', ctrl.jobs.create);

// SHOW Single JOB
router.get('/:id', ctrl.jobs.show);

// SHOW All JOBS
// router.get('/', ctrl.jobs.showAll);
// router.get('/city/:id', ctrl.jobs.showcity)

// UPDATE Single JOB
// router.put('/:id', ctrl.jobs.update);

// DELETE Single JOB
// router.delete('/:id', ctrl.jobs.destroy);


module.exports = router;