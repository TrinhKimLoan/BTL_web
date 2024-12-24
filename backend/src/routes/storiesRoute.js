const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/storiesController');

const multer = require('multer');

const upload = multer(); // Middleware xử lý file tải lên

router.post('/stories', upload.single('image'), storiesController.createStories);

router.get('/stories', storiesController.getAllStories);
router.get('/stories/:id', storiesController.getStoryById);
// router.post('/stories', storiesController.createStories);
router.put('/stories/:id', storiesController.updateStories);
router.delete('/stories/:id', storiesController.deleteStories);

module.exports = router;
