var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/latticeGas', function(req, res, next) {
  res.render('latticeGas', { title: 'Lattice Gas' });
});

module.exports = router;
