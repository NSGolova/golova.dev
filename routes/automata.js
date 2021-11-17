var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/latticeGas', function(req, res, next) {
  res.redirect("gasomaton");
});
router.get('/gasomaton', function(req, res, next) {
  res.render('gasomaton', { title: 'Gasomaton' });
});
router.get('/gasomatonLite', function(req, res, next) {
  res.render('gasomatonLite', { title: 'Gasomaton Lite' });
});
router.get('/gasomatonGPU', function(req, res, next) {
  res.render('gasomatonGPU', { title: 'Gasomaton WebGPU' });
});

module.exports = router;
