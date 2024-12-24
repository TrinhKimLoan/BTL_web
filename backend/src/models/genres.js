// Tạo hàm getAll2
const db = require('../configs/database')

const Genres = {
    getAll2: (callback) => {
        db.query('SELECT * FROM genres', callback);
    },
    create2: (name,callback) => {
        db.query('INSERT INTO genres (name) VALUES (?)', [name], callback);
    },
    update2: (id, name, callback) => {
        db.query('UPDATE genres SET name = ? WHERE id = ?', [name, id], callback);
    },
    delete2: (id, callback) => {
        db.query('DELETE FROM genres WHERE id = ?', [id], callback);
    }
};

module.exports = Genres;