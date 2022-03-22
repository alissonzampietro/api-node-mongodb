import express from 'express'
const router = express.Router()

router.post('/health', (req, res) => {
    res.success('it\'s working')
})

export default router