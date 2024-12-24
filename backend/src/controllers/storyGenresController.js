const StoryGenres = require('../models/storyGenres');

exports.getAllStoryGenres = (req, res) => {
    StoryGenres.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.getGenresByStoryId = (req, res) => {
    const { storyId } = req.params;

    StoryGenres.getByStoryId(storyId, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.createStoryGenre = (req, res) => {
    const storyGenreData = req.body;

    StoryGenres.create(storyGenreData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Story-genre association created successfully' });
    });
};

exports.deleteStoryGenre = (req, res) => {
    const { id } = req.params;

    StoryGenres.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Story-genre association deleted successfully' });
    });
};

exports.deleteGenresByStoryId = (req, res) => {
    const { storyId } = req.params;

    StoryGenres.deleteByStoryId(storyId, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'All genres for the story deleted successfully' });
    });
};
