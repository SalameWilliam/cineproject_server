var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('festivals', { title: 'Festivals' });
});

router.get('/48hfp', function(req, res, next) {
    res.render('48hfp', { title: '48 Hour Film Project' });
});

router.get('/partenaire', function(req, res, next) {
    res.render('partenaire', { title: 'Devenir partenaire' });
});

module.exports = router;
