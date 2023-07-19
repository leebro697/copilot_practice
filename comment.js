// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// POST /comment/create
router.post('/create', commentController.create);

// POST /comment/destroy
router.post('/destroy', commentController.destroy);

// POST /comment/update
router.post('/update', commentController.update);

// GET /comment/:id
router.get('/:id', commentController.show);

module.exports = router;



