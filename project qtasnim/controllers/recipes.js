const {getRecipes, postRecipes, putRecipes, deleteRecipes, searchRecipes, showNewRecipes, showRecipeComments} = require('../models/recipes');

exports.getAllRecipe = async(req, res) => {
    try {
        const data = await getRecipes();
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.createRecipe = async(req, res) => {
    try {
        const { title, ingredients, recipemaker_id } = req.body;
        const data = await postRecipes(title, ingredients, recipemaker_id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}


exports.updateRecipe = async(req, res) => {
    try {
        const { id } = req.params
        const { title, ingredients, recipemaker_id } = req.body
        const data = await putRecipes(title, ingredients, recipemaker_id, id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.dropRecipe = async(req, res) => {
    try {
        const { id } = req.params
        const data = await deleteRecipes(id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.searchRecipe = async(req, res) => {
    try {
        const { title } = req.query
        const result = await searchRecipes(title);
        if(result){
            res.status(200).send(result);
    }
        } catch (error) {
            res.send(error);
        }
 }
    
exports.showNewRecipe = async(req, res) => {
    try {
        const show = await showNewRecipes();
        if(show){
            res.status(200).send(show);
     }
        } catch (error) {
            res.send(error);
        }
}

exports.showRecipeComment = async (req, res) => {
    try {
      const { recipe_id } = req.params;
      const show = await showRecipeComments(recipe_id);
      if (show) {
        res.status(200).send(show);
      }
    } catch (error) {
      res.send(error);
    }
  };