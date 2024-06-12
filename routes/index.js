const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 by Okta Webアプリケーションサンプル',
  });
});

router.get('/profile', function (req, res, next) {
  res.render('profile', {
    title: 'プロファイル',
    userProfile: undefined
  });
});

module.exports = router;
