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

router.get('/formation', function(req, res, next) {
    res.render('formation', { title: 'Formations' });
});

router.get('/box', function(req, res, next) {
    res.render('box', { title: 'Nos Box éducatives' });
});

module.exports = router;
