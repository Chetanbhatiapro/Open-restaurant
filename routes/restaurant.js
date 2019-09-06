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


/* Requests for restuarnt's menus */

/* Get create new restuarant menu item*/
router.get('/:id/menu/new', (req, res, next) => {
    res.send('Get req for new menu');
});

/* Post create new restuarant menu item*/
router.post('/:id/menu/new', (req, res, next) => {
    res.send('Post req for new menu');
});

/* Get edit restuarant menu item*/
router.get('/:id/menu/:id/edit', (req, res, next) => {
    res.send('Edit req for menu');
});

/* Post delete restuarant menu item*/
router.get('/:id/menu/:id/delete', (req, res, next) => {
    res.send('Delete item req for new menu');
});


module.exports = router;