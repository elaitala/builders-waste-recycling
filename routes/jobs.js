const express = require('express')
const router = express.Router();
// const mw = require('../middleware');
const ctrl = require('../controllers');
// PATH = '/api/v1/jobs'

// Controller To Show All JOBS
router.get('/', ctrl.jobs.showAll);
// router.get('/city/:id', ctrl.jobs.showcity)

// SHOW Single JOB
router.get('/:id', ctrl.jobs.show);

// CREATE Single JOB
// router.get('/user/own_posts', ctrl.jobs.userposts);
router.post('/create', ctrl.jobs.create);

// UPDATE Single JOB
router.put('/:id', ctrl.jobs.update);

// DELETE Single JOB
router.delete('/:id', ctrl.jobs.destroy);


module.exports = router;