
const express = require("express");
const app = express();
const home = require("./routes/index");
const teachers = require("./routes/teachers");
const subject = require("./routes/subject");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.use("/", home);
app.use("/teachers", teachers);
app.use("/subject", subject);

app.use("/*", (req, res) => {
    res.send("page not found")
})


app.listen(3000, () => {
    console.log("Running through local host...")
})