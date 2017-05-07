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
});

router.get('/words/:id', api.readOne);
router.patch('/words/:id', api.update);
router.delete('/words/:id', (req, res, next) => {
    if (document.querySelector('.clicked')) {
        api.destroy;
    };
});

module.exports = router;