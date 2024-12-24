//Tạo hàm getAllUsers
const Todo2 = require('../models/genres')
exports.getAllGenres = (req,res) =>{
    Todo2.getAll2((err,results) => {
        if (err) return res.status(500).json({error: err})
        res.status(200).json(results)
    })
}

// More feature
exports.createGenres = (req, res) => {
    const { name } = req.body;
    Todo2.create2(name, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({message: 'Genres created successfully'});
    });
};

exports.updateGenres = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    Todo2.update2(id, name, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Genres updated successfully'});
    });
};

exports.deleteGenres = (req, res) => {
    const { id } = req.params;
    Todo2.delete2(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Genres delete successfully'});
    });
};