const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const postsRouter = require("./routers/posts.js")

app.get("/", (req,res) => {
    res.send("Benvenuto nell'app dei posts!");
})

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
})