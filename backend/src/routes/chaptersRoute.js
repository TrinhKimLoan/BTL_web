const express = require('express');
const router3 = express.Router();
const chaptersController = require('../controllers/chaptersController');

// Route lấy tất cả các chương
router3.get('/chapters', chaptersController.getAllChapters);

// Route lấy các chương theo ID truyện
router3.get('/chapters/story/:storyId', chaptersController.getChaptersByStoryId);

router3.get('/chapters/:id', chaptersController.getChaptersById);
// Route thêm chương mới
router3.post('/chapters', chaptersController.createChapter);

// Route cập nhật chương
router3.put('/chapters/:id', chaptersController.updateChapter);

// Route xóa chương
router3.delete('/chapters/:id', chaptersController.deleteChapter);

module.exports = router3;
