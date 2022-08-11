const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Pages/Contact.html'));
});


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});



router.get('/animals', (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});


module.exports = router;