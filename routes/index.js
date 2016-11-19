var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/music', function(req, res){
  res.render('music', {
    title: 'Music'
  });
});

router.get('/projects', function(req, res){
  res.render('projects', {
    title: 'Projects'
  });
});

router.get('/social', function(req, res){
  res.render('social', {
    title: 'Social'
  });
});


router.get('/breakout', function(req, res){
  res.render('breakout', {
    title: 'Breakout'
  });
});

router.get('/breakout.html', function(req, res){
  res.render('breakout', {
    title: 'Breakout'
  });
});

router.get('/zhanwenchen.com', function(req, res){
  res.render('zhanwenchen', {
    title: 'zhanwenchen.com'
  });
});

router.get('/concerto', function(req, res){
  res.render('concerto', {
    title: 'Vassar College Concerto Competition Winners\' Concert, May. 6, 2016'
  });
});

module.exports = router;
