const router = require('express').Router()
// const router = express()


router.get('/', (req, res) => {
    res.render('home.ejs')
})


module.exports = router