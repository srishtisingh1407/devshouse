var express = require('express');
var router = express.Router();
const userModel = require("./users");

// ********* our plugs *************

const passport = require('passport');
const localStrategy = require("passport-local");
passport.authenticate(new localStrategy(userModel.authenticate()))










/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });


// ************ PROFILE PAGE WITH LOGIN FUNCTIONS ****************//

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function isLoggedIn(req, res , next){

  if(req.isAuthenticated()) return next();
  res.redirect("/")//else statement
}











// *********** AUTHENTICATION CODE *************************//

router.post("/register",function(req,res){

  const { username, email} = req.body;
const userData = new userModel({ username, email }); //

userModel.register(userData , req.body.password).then(function(){
  passport.authenticate("local")(req , res , function(){
    res.redirect("/myprofile");
  })
})

})


router.post('/login',  passport.authenticate("local",{

  successRedirect: "/myprofile",
  failureRedirect: "/"
}) , function( req, res){

});

router.get('/logout' , function(req,res){

  req.logout(function(err){
    if (err) { return next (err);}
    res.redirect('/')
  })

})






// *********************************************************//





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
  router.get('/location', function(req, res, next) {
    res.render('location');
  });
  router.get('/myprofile', function(req, res, next) {
    res.render('myprofile');
  });
  router.get('/locator', function(req, res, next) {
    res.render('locator');
  });


router.get('/login-signup', function(req, res, next) {
  res.render('login-signup');
});

<<<<<<< HEAD
router.get('/loc', function(req, res, next) {
  res.render('location');
});



  router.post('/login-signup', function(req, res, next) {
    res.render('login-signup');
});
  router.post('/my', function(req, res, next) {
    res.render('myprofile');
});
  router.post('/map', function(req, res, next) {
    res.render('location');
});
=======
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/myprofile', function(req, res, next) {
  res.render('myprofile');
});


router.get('/tab', function(req,res,next){
res.render('tab')
});


// ***************************************************************************8//



router.get('/myprofile' , isLoggedIn , function(req,res,next){

  res.send("myprofile")
});
// isLoggedin is a middleware ---> hence next function won't work untill that function runs

>>>>>>> 9cca0acb16ce8ba5acb793060b647014868dbc49

module.exports = router;



