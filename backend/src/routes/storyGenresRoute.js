const express = require('express');
const router4 = express.Router();
const storyGenresController = require('../controllers/storyGenresController');

// Lấy tất cả liên kết giữa truyện và thể loại
router4.get('/story-genres', storyGenresController.getAllStoryGenres);

// Lấy các thể loại của một truyện
router4.get('/story-genres/story/:storyId', storyGenresController.getGenresByStoryId);

// Tạo liên kết mới giữa truyện và thể loại
router4.post('/story-genres', storyGenresController.createStoryGenre);

// Xóa một liên kết cụ thể
router4.delete('/story-genres/:id', storyGenresController.deleteStoryGenre);

// Xóa tất cả thể loại của một truyện
router4.delete('/story-genres/story/:storyId', storyGenresController.deleteGenresByStoryId);

module.exports = router4;
