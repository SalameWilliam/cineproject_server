var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('festivals', { title: 'Festivals' });
});

router.get('/48hfp', function(req, res, next) {
    res.render(
        '48hfp',
        {
            title: '48 Hour Film Project',
            directory: '/images/48hfp/',
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

router.get('/partenaire', function(req, res, next) {
    res.render('partenaire', { title: 'Devenir partenaire' });
});

module.exports = router;
