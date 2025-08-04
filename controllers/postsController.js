const posts = require("../data/postsData.js");

//index

const index = (req, res) => {
    //EXTRA: FILTER

    //recupero il parametro inserito all'interno di postman (in questo caso recupero un nome inserito)
    const namePost = req.query.name;

    //Creiamo una variabile che inizialmente conterrà tutti i post presenti nell’array.
    let filteredPosts = posts;

    //vediamo se si trova il name nell'array di oggetti posts
    if(namePost){
        filteredPosts = posts.filter(post => post.name.toLocaleLowerCase().includes(namePost.toLocaleLowerCase()));
    }
    res.json(filteredPosts);
}

//show

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(item => item.id === id)
    if(!post){
        res.status(404).json({error: "404 not found", message: `Post con id ${id} non presente`});
    }
    else{
        res.json(post);
    }
}


//create

const create = (req,res) => {
    res.send("Creazione di un nuovo post");
}


//update

const update = (req,res) => {
    res.send(`Modifica del post con id ${req.params.id}`);
}


//delete

const destroy = (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(item => item.id === id);
    if(!post){
        res.status(404).json({error: "404 not found", message: `Post con id ${id} non presente`});
    }
    else{
        posts.splice(posts.indexOf(post), 1);
        res.sendStatus(204);
        console.log(posts);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};