const db = require('../configs/database');

const Stories = {
    getAll: (callback) => {
        db.query('SELECT * FROM stories', callback);
    },

    getStoryById: (id, callback) => {
        db.query('SELECT * FROM stories WHERE id = ?', [id], callback)
    },

    create: (data, callback) => {
        const { title, image, author, description, status, created_at } = data;
        const query = `
            INSERT INTO stories (title, image, author, description, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        db.query(query, [title, image, author, description, status, created_at], callback);
    },

    update: (id, data, callback) => {
        const { title, image, author, description, status } = data;
        const query = `
            UPDATE stories
            SET title = ?, image = ?, author = ?, description = ?, status = ?
            WHERE id = ?
        `;
        db.query(query, [title, image, author, description, status, id], callback);
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM stories WHERE id = ?';
        db.query(query, [id], callback);
    },
};

module.exports = Stories;
