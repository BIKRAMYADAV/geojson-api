const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello friend');
})

module.exports = router;