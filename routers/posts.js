const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
    res.send("Elenco dei posts");
})

//show
router.get("/:id", (req, res) => {
    res.send(`Dettaglio del post con id ${req.params.id}`);
})

//create
router.post("/", (req,res) => {
    res.send("Creazione di un nuovo post");
})

//update
router.put("/:id", (req,res) => {
    res.send(`Modifica del post con id ${req.params.id}`);
})

//delete
router.delete("/:id", (req,res) => {
    res.send(`Eliminazione del post con id ${req.params.id}`)
})

module.exports = router;