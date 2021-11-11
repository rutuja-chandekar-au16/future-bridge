var express = requires ('express');
var router = express.Router();

router.get('/', function (req,res, next){
    res.render('index', {title: 'test', conditions: false});
});

router.get('/form', function(req, res, next){
    res.render('form');
});

router.post('/submit', function(req, res, next){
    res.redirect('/');
});

module.exports = router; 