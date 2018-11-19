const routes = require('express').Router()
const sbController = require('../controllers/sbController')
const View = require('../views/view')

routes.get("/", function(req, res){
    sbController.allSubjects()
    .then(subjectList =>{
        let all = subjectList.map(subjects => subjects.dataValues)
        // res.send(all)
        res.render("allSubjects.ejs", {sbAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allSubjects",
                Details: err
            }
        )
    })
})

module.exports = routes