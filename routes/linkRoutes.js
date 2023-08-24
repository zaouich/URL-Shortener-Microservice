const { Router } = require("express");
const { addLink, lookup, getLink } = require("../controllers/linkController");

const router= Router()
router.route("/").post(lookup,addLink)
router.route("/:url").get(getLink)

module.exports= router