const express = require("express");
const router = express.Router();

const postController = require("../controllers/postsController.js")

//index
router.get("/", postController.index);
//scriviamo per testare su postman con il GET: http://localhost:3000/posts

//show
router.get("/:id", postController.show);
//scriviamo per testare su postman con il GET: http://localhost:3000/posts/1

//create
router.post("/", postController.create);
//scriviamo per testare su postman con il POST: http://localhost:3000/posts

/*

//update
router.put("/:id", )

//delete
router.delete("/:id", )
*/

module.exports = router;