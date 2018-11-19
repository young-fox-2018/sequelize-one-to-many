const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('INDEX')
})

router.get('/*', (req, res) => {
    res.render('pagenotfound.ejs')
})

module.exports = router