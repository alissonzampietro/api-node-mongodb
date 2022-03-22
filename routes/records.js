import express from 'express'
import {getAll} from '../repository/recordRepository.js'
const router = express.Router()

router.post('/records', async function(req, res) {
    const allRecords = await getAll()
    res.success(allRecords)
})

export default router