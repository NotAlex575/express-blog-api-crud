//index

const index = (req, res) => {
    res.send("Elenco dei posts");
}

/*

//show

(req, res) => {
    res.send(`Dettaglio del post con id ${req.params.id}`);
}

//create

(req,res) => {
    res.send("Creazione di un nuovo post");
}

//update

(req,res) => {
    res.send(`Modifica del post con id ${req.params.id}`);
}

//delete

 (req,res) => {
    res.send(`Eliminazione del post con id ${req.params.id}`)
}

*/

module.exports = {
    index
}