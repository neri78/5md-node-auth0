const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 by Okta Webアプリケーションサンプル',
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    title: 'プロファイル',
    userProfile: JSON.stringify(req.oidc.user, null, 2)
  });
});

module.exports = router;
