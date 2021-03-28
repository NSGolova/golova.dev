var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fractalSounds', function(req, res, next) {
  res.render('fractalSounds', { title: 'Fractal sounds' });
});

router.get('/ddonut', function(req, res, next) {
  res.render('ddonut', { title: 'Spinning donut' });
});

module.exports = router;
