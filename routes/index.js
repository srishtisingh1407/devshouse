var express = require('express');
var router = express.Router();

var express= require.express();


/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });
  router.get('/timeline', function(req, res, next) {
    res.render('timeline');
  });
  router.get('/profile', function(req, res, next) {
    res.render('profile');
  });
  router.get('/nav', function(req, res, next) {
    res.render('nav');
  });
  router.get('/hack', function(req, res, next) {
    res.render('hack');
  });
  router.get('/privacy', function(req, res, next) {
    res.render('privacy');
  });

  router.get('/login-signup', function(req, res, next) {
    res.render('login-signup');
  });

  

module.exports = router;
