const express = require("express");
const router = express.Router();

const postController = require("../controllers/postsController.js")

//index
router.get("/", postController.index);
//scriviamo per testare su postman: http://localhost:3000/posts

//show
router.get("/:id", postController.show);
//scriviamo per testare su postman: http://localhost:3000/posts/1

/*
//create
router.post("/", )

//update
router.put("/:id", )

//delete
router.delete("/:id", )
*/

module.exports = router;