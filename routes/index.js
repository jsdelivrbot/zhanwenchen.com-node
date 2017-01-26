var express = require('express');
var router = express.Router();

/////////////////////////////////////
// MAIN PAGES
/////////////////////////////////////

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

/////////////////////////////////////
// MUSIC SUB-PAGES
/////////////////////////////////////

router.get('/concerto', function(req, res){
  res.render('concerto', {
    title: 'Vassar College Concerto Competition Winners\' Concert, May. 6, 2016'
  });
});

router.get('/schumann-trio', function(req, res){
  res.render('schumann-trio', {
    title: 'Schumann Piano Trio No.3: I. Bewegt, aber nicht zu rasch '
  });
});

/////////////////////////////////////
// PROJECTS SUB-PAGES
/////////////////////////////////////


router.get('/breakout', function(req, res){
  res.render('breakout', {
    title: 'Breakout'
  });
});

// Duplicate due to older resume
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

router.get('/jsPsych', function(req, res){
  res.render('jsPsych', {
    title: 'jsPsych'
  });
});

router.get('/chat', function(req, res){
  res.render('chat', {
    title: 'Chat'
  });
});

router.get('/todo', function(req, res){
  res.render('todo', {
    title: 'To-Do'
  });
});

router.get('/SimulatedReality', function(req, res){
  res.render('SimulatedReality', {
    title: 'SimulatedReality'
  });
});

router.get('/TrainStream', function(req, res){
  res.render('TrainStream', {
    title: 'TrainStream'
  });
});

router.get('/RoadJams', function(req, res){
  res.render('RoadJams', {
    title: 'RoadJams'
  });
});

router.get('/resume', function(req, res){
  res.render('resume', {
  });
});


/////////////////////////////////////
// EXPORTS
/////////////////////////////////////

module.exports = router;
