const express = require('express');
const router = express.Router();


/* Get restaurant create listing */
router.get('/create', (req, res, next) => {
  res.send('Req for create new restaurant');
});

/* Post restaurant create listing. */
router.post('/create', (req, res, next) => {
  res.send('Details submitted');
});

/* GET restaurant by id listing. */
router.get('/:id', function(req, res, next) {
  res.send('Welcome to the ID restaurant');
});

/* GET restaurant edit listing. */
router.get('/:id/edit', function(req, res, next) {
  res.send("Req for to edit res");
});

/* GET restaurant edit listing. */
router.get('/:id/delete', function(req, res, next) {
  res.send("Req for to delete ID res");
});


module.exports = router;