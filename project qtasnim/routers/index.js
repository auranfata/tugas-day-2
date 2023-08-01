const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())
const port = 3000;
const bodyParser = require("body-parser");
const { pool } = require("../connect");
const controllerUser = require("../controllers/users");
const controllersRecipe = require("../controllers/recipes");
const controllersComment = require("../controllers/comments");

app.use(cors({
  origin: 'http://localhost:3000/'
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "success" });
});

//users
app.post("/users/post", controllerUser.createUser);
app.get("/users/get", controllerUser.getAllUser);
app.put("/users/put/:id", controllerUser.updateUser);
app.delete("/users/delete/:id", controllerUser.dropUser);

//recipes
app.post("/recipes/post", controllersRecipe.createRecipe);
app.get("/recipes/get", controllersRecipe.getAllRecipe);
app.put("/recipes/put/:id", controllersRecipe.updateRecipe);
app.delete("/recipes/delete/:id", controllersRecipe.dropRecipe);
app.get("/recipes/search", controllersRecipe.searchRecipe);
app.get("/recipes/show", controllersRecipe.showNewRecipe);
app.get('/recipes/showcomment/:recipe_id', controllersRecipe.showRecipeComment);

//comments
app.get("/comments/get", controllersComment.getAllComment);
app.post("/comments/post", controllersComment.createComment);
app.put("/comments/put/:id", controllersComment.updateComment);
app.delete("/comments/delete/:id", controllersComment.dropComment);
app.get("/comments/show", controllersComment.showComment);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
