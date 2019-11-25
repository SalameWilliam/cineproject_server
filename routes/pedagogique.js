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
            directory: '/images/portfolio/',
            public: {
                imgs: {
                    _contents:[
                        "stage 1.jpg",
                        "stage 2.jpg",
                        "stage 3.jpg",
                        "stage 4.jpg",
                        "stage 5.jpg",
                        "stage 6.jpg",
                        "stage 7.jpg",
                        "stage 8.jpg",
                        "stage 9.jpg"
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
