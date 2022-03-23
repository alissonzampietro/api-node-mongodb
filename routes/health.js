const express = require('express');
const router = express.Router()

router.post('/health', (req, res) => {
    res.success('it\'s working')
})

module.exports = router