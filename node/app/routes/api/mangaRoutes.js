const express = require("express")
const router = express.Router()

const dao = require("../../daos/mangaDao")

router.get("/", (req, res)=> {
    dao.findAll(req,res)
})

router.get("/sort", (req, res)=> {
    dao.sort(req, res)
})

router.get("/:id", (req, res)=> {
    dao.findById(req, res, req.params.id)
})

module.exports = router