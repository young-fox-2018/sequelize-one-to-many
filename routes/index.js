const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello and Welcome!")
})

module.exports = router