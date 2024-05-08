const router = require('express').Router();
// TODO: import express-openid-connect package.
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 by Okta Web App Sample',
  });
});

// TODO: add authentication middleware in this route, and add a value of userProfile.
router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    title: 'Your Profile',
    userProfile: JSON.stringify(req.oidc.user, null, 2)
  });
});

module.exports = router;
