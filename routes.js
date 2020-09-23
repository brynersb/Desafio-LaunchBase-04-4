const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes
    .get("/", function (req, res) {
        return res.redirect("/teachers")
    })

    .get("/teachers/", function (req, res) {
        return res.render("./teachers/teacher")
    })

    .get("/teachers/create", function (req, res) {
        return res.render("./teachers/create")
    })

    .post("/teachers/", teachers.post)

    .get("/studants", function (req, res) {

        return res.render("studants")
    })

routes.use(function (req, res) {
    res.status(404).render("not-found");
});

module.exports = routes