const router = require('express').Router()
const teacher = require('./teacher')
const subject = require('./subject')

router.get('/', function (req, res) {
    res.render('index.ejs')
})

router.use('/teacher', teacher)
router.use('/subject', subject)

module.exports = router