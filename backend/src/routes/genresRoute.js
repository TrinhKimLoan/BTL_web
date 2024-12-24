const express = require('express');
const router2 = express.Router();
const genresController = require('../controllers/genresController'); //import từ controllers

router2.get('/genres', genresController.getAllGenres);
router2.post('/genres', genresController.createGenres);
router2.put('/genres/:id', genresController.updateGenres);
router2.delete('/genres/:id', genresController.deleteGenres);

module.exports = router2;