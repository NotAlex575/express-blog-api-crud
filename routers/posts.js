const express = require("express");
const router = express.Router();

const postController = require("../controllers/postsController.js")

//index
router.get("/", postController.index);

/*
//show
router.get("/:id", )

//create
router.post("/", )

//update
router.put("/:id", )

//delete
router.delete("/:id", )
*/

module.exports = router;