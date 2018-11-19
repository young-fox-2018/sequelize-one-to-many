
const express = require("express");
const app = express();
const home = require("./routes/index");
const teachers = require("./routes/teachers");
const subject = require("./routes/subject");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

app.use("/home", home);
app.use("/home/teachers", teachers);
app.use("/home/subject", subject);
app.use("/home/addTeacher", teachers);


app.listen(3000, () => {
    console.log("Running through local host...")
})