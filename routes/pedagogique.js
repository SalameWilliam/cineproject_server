var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pedagogique', { title: 'Pedagogique' });
});

router.get('/colloque', function(req, res, next) {
    res.render('colloque', { title: 'Colloque' });
});

router.get('/stage', function(req, res, next) {
    res.render('stage', { title: 'Stages' });
});

router.get('/stages_precedents', function(req, res, next) {
    res.render(
        'stages_precedents',
        {
            title: 'Stages Précédents',
            directory: '/images/stages/',
            public: {
                imgs: {
                    _contents:[
                        "48hfp (1).jpg",
                        "48hfp (2).jpg",
                        "48hfp (3).jpg",
                        "48hfp (4).jpg",
                        "48hfp (5).jpg",
                        "48hfp (6).jpg",
                        "48hfp (7).jpg",
                        "48hfp (8).jpg",
                        "48hfp (9).jpg"
                    ]
                }
            }
        }
    );
});

router.get('/formation', function(req, res, next) {
    res.render('formation', { title: 'Formations' });
});

router.get('/box', function(req, res, next) {
    res.render('box', { title: 'Nos Box éducatives' });
});

module.exports = router;
