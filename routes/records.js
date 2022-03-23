const express = require('express');
const {getAll} = require('../repository/recordRepository.js');
const router = express.Router()

router.post('/records', async function(req, res) {
    const allRecords = await getAll()
    res.success(allRecords)
})

module.exports = router