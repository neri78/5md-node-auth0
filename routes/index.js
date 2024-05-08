const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 by Okta Web App Sample',
  });
});

router.get('/profile', function (req, res, next) {
  res.render('profile', {
    title: 'Your Profile',
    userProfile: undefined
  });
});

module.exports = router;
