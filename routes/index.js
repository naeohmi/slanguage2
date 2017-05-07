const express = require('express');
const router = express.Router();
var api = require('./definitions.js');
var config = require('../models/config.js');

router.get('/', (req, res, next) => {
    if (req.query.word != null) {
        api.getWord(req, res, next);
    }
    res.render('index', {
        title: 'slanguage',
    })
});

router.get('/words', (req, res, next) => {
    api.readAll(req, res, next);
    // config.db.any("SELECT * FROM words WHERE id"
    // .then((data) => {
    // res.render('words', {
    // title: 'slanguage words',
    // data: config.db.word

    // })
});

// router.get('words/:id', (req, res, next) => {
//     api.readOne(req, res, next);
//     let id = req.params.id;
//     res.render('wrd', {
//         words: config.db[id - 1],
//         title: 'Current word is...',
//     });
// });

router.get('/words/:id', api.readOne);
router.put('/words/up/:id', api.update);
router.delete('/words/de/:id', api.destroy);

module.exports = router;