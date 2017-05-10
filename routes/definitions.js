var config = require('../models/config.js');

let getWord = (req, res, next) => {
    var inputWord = req.query.word;
    config.db.none(
            "INSERT INTO input (word)" +
            "VALUES ($1);", [inputWord]
        )
        .then(
            grabUrbanDefs(inputWord)
        );
    res.redirect('/')

    .catch((err) => {
        return next(err);
    });
};

let grabUrbanDefs = (word) => {
    // console.log('urban defs has awoken!');
    config.axios.get(`http://api.urbandictionary.com/v0/define?term=${word}`)

    .then((res) => {
        var urbanDef1 = res.data.list[0].definition;
        var urbanSent1 = res.data.list[0].example;
        var urbanDef2 = res.data.list[1].definition;
        var urbanSent2 = res.data.list[1].example;
        console.log(urbanDef1);

        config.db.none(
            "INSERT INTO defs (word, urbanDef1, urbanDef2, urbanSent1, urbanSent2)" +
            "VALUES ($1, $2, $3, $4, $5);", [word, urbanDef1, urbanDef2, urbanSent1, urbanSent2]
        )
    });
};
class CRUD {
    constructor() {}

    allWords(req, res, next) {
        config.db.any('SELECT * FROM defs;')
            .then((data) => {
                // data = data.reverse();
                res.status(200)
                    .render('words', {
                        status: 'success',
                        data: data,
                        title: 'slanguage',
                        subtitle: 'all the words',
                    })
            })
            .catch((err) => {
                return next(err);
            });
    };
    oneWord(req, res, next) {
        let wordId = parseInt(req.params.id);
        config.db.one('SELECT * FROM defs WHERE id = $1;', wordId)
            .then((data) => {
                res.status(200)
                    .render('wrd', {
                        data: data,
                        title: 'slanguage',
                        subtitle: 'just one word',
                    })
            })
            .catch((err) => {
                return next(err);
            });
    };

    updateWord(req, res, next) {
        config.db.none(
                `UPDATE defs SET urbanDef1=$1, urbanDef2=$2, urbanSent1=$3, urbanSent2=$4 WHERE id=$5);`,

                [req.body.urbanDef1, req.body.urbanDef2, req.body.urbanSent1, req.body.urbanSent2, parseInt(req.params.id)]
            )
            .then(() => {
                res.status(200)
                    .json({
                        status: 'success',
                    });
            })
            .catch((err) => {
                return next(err);
            });
    };
    destroyWord(req, res, next) {
        let wordId = parseInt(req.params.id);
        config.db.result('DELETE from defs WHERE id = $1;', wordId)
            .then((item) => {
                res.status(200)
                    .json({
                        status: 'success',
                        message: `Removed ${item} word`
                    });
            })
            .catch((err) => {
                return next(err);
            });
    };
};
let crudy = new CRUD();

module.exports = {
    getWord: getWord, //GET
    readAll: crudy.allWords, //READ
    readOne: crudy.oneWord, //READ
    update: crudy.updateWord, //UPDATE
    destroy: crudy.destroyWord //DELETE
};