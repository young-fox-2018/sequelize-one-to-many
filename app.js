const express = require('express')
const app = express()
const Teacher = require('./Routes/Teacher')
const Subject = require('./Routes/Subject')
const port = 3000
const home = require('./Routes/home')
app.use(express.urlencoded({extended:true}))
app.use('/',home)
app.use('/Teacher',Teacher)
app.use('/Subject',Subject)


app.listen(port,()=>{
    console.log(`this is your site`)
})