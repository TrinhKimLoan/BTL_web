const db = require('../configs/database'); // Kết nối tới cơ sở dữ liệu

const Chapters = {
    getAll: (callback) => {
        db.query('SELECT * FROM chapters', callback);
    },

    getByStoryId: (storyId, callback) => {
        db.query('SELECT * FROM chapters WHERE story_id = ?', [storyId], callback);
    },

    // THIS ONE IS ADDED TO CREATE THE GET METHOD WITH SPECIFIC ID
    getById: (id, callback) => {
        db.query('SELECT * FROM chapters WHERE id = ?', [id], callback);
    },
    //

    create: (chapterData, callback) => {
        const { story_id, title, content, chapter_number, created_at } = chapterData;
        db.query(
            'INSERT INTO chapters (story_id, title, content, chapter_number, created_at) VALUES (?, ?, ?, ?, ?)',
            [story_id, title, content, chapter_number, created_at],
            callback
        );
    },

    update: (id, chapterData, callback) => {
        const { title, content, chapter_number } = chapterData;
        db.query(
            'UPDATE chapters SET title = ?, content = ?, chapter_number = ? WHERE id = ?',
            [title, content, chapter_number, id],
            callback
        );
    },

    delete: (id, callback) => {
        db.query('DELETE FROM chapters WHERE id = ?', [id], callback);
    },
};

module.exports = Chapters;
