const Stories = require('../models/stories');
exports.getAllStories = (req, res) => {
    Stories.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};
// phương thức để lấy dữ liệu của 1 truyện cụ thể theo ID truyền vào

exports.getStoryById = (req, res) => {
    const { id } = req.params;
    Stories.getStoryById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.updateStories = (req, res) => {
    const storyId = req.params.id;
    const updatedData = req.body;

    Stories.update(storyId, updatedData, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Story not found.' });
        }
        res.status(200).json({ message: 'Story updated successfully.' });
    });
};

exports.deleteStories = (req, res) => {
    const storyId = req.params.id;

    Stories.delete(storyId, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Story not found.' });
        }
        res.status(200).json({ message: 'Story deleted successfully.' });
    });
};

// Phần xử lý hình ảnh tải lên
// 
const axios = require('axios');
const IMGUR_CLIENT_ID = '488c752cc4cffa5'; // Thay bằng Client ID của bạn

exports.createStories  = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Tải hình ảnh lên Imgur
        const response = await axios.post(
            'https://api.imgur.com/3/upload',
            {
                image: req.file.buffer.toString('base64'),
                type: 'base64',
            },
            {
                headers: {
                    Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
                },
            }
        );

        const imageUrl = response.data.data.link;

        // Lấy dữ liệu từ req.body
        const { title, author, description, status } = req.body;
        const created_at = new Date();


        // Gọi model để lưu dữ liệu
        Stories.create(
            { title, image: imageUrl, author, description, status, created_at },
            (err) => {
                if (err) {
                    throw err;
                }
                res.json({ message: 'Story uploaded and saved', url: imageUrl });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading story' });
    }
};