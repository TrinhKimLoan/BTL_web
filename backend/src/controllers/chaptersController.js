const Chapters = require('../models/chapters');

exports.getAllChapters = (req, res) => {
    Chapters.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.getChaptersByStoryId = (req, res) => {
    const { storyId } = req.params;
    Chapters.getByStoryId(storyId, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// THIS ONE IS ADDED TO CREATE THE GET METHOD WITH SPECIFIC ID
exports.getChaptersById = (req, res) => {
    const { id } = req.params;
    Chapters.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};
//

exports.createChapter = (req, res) => {
    const chapterData = req.body;
    chapterData.created_at = new Date(); // Gán ngày hiện tại

    Chapters.create(chapterData, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Chapter created successfully', chapterId: result.insertId });
    });
};

exports.updateChapter = (req, res) => {
    const { id } = req.params;
    const chapterData = req.body;

    Chapters.update(id, chapterData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Chapter updated successfully' });
    });
};

exports.deleteChapter = (req, res) => {
    const { id } = req.params;

    Chapters.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Chapter deleted successfully' });
    });
};
