const db = require('../configs/database'); // Kết nối tới cơ sở dữ liệu

const StoryGenres = {
    getAll: (callback) => {
        db.query('SELECT * FROM story_genres', callback);
    },

    getByStoryId: (storyId, callback) => {
        db.query(
            'SELECT sg.*, g.name AS genre_name FROM story_genres sg JOIN genres g ON sg.genre_id = g.id WHERE sg.story_id = ?',
            [storyId],
            callback
        );
    },

    create: (storyGenreData, callback) => {
        const { story_id, genre_id } = storyGenreData;
        db.query(
            'INSERT INTO story_genres (story_id, genre_id) VALUES (?, ?)',
            [story_id, genre_id],
            callback
        );
    },

    delete: (id, callback) => {
        db.query('DELETE FROM story_genres WHERE id = ?', [id], callback);
    },

    deleteByStoryId: (storyId, callback) => {
        db.query('DELETE FROM story_genres WHERE story_id = ?', [storyId], callback);
    },
};

module.exports = StoryGenres;
