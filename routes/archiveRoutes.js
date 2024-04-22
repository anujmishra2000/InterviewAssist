const express = require('express');
const archiveController = require('../archiveControllers/archiveController');
const router = express.Router();

router.get('/', archiveController.archive_index);

//create new archive object in database
router.post('/', archiveController.archive_post);

//render create new archive form page
router.get('/create', archiveController.archive_create);

//get details of archive by id
router.get('/:id', archiveController.archive_get_id)

//delete archive by id
router.delete('/:id', archiveController.archive_delete_id)

module.exports = router;
