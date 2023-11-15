const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactUs', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views','contactUs.html'));
    });

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})


module.exports = router;