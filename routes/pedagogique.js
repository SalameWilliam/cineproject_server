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
                        "stage1.jpg",
                        "stage2.jpg",
                        "stage3.jpg",
                        "stage4.jpg",
                        "stage5.jpg",
                        "stage6.jpg",
                        "stage7.jpg",
                        "stage8.jpg",
                        "stage9.jpg"
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
