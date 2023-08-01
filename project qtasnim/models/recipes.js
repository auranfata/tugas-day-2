const {pool} = require('../connect');

exports.getRecipes = async () =>{
    try {
        const result = await pool.query('SELECT * FROM recipes')
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}
exports.postRecipes = async(title, ingredients, recipemaker_id) =>{
    try {
        const result = await pool.query('INSERT INTO recipes (title, ingredients, recipemaker_id) VALUES ($1, $2, $3) RETURNING *', [title, ingredients, recipemaker_id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.putRecipes = async(title, ingredients, recipemaker_id, id) =>{
    try {
        const result = await pool.query('UPDATE recipes SET title = $1, ingredients = $2, recipemaker_id = $3 WHERE id = $4 RETURNING *', [title, ingredients, recipemaker_id, id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}
 
exports.deleteRecipes = async(id) =>{
    try {
        const result = await pool.query('DELETE FROM recipes WHERE id = $1 RETURNING *', [id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.searchRecipes = async(title) =>{
    try {
        const query = 'SELECT title FROM recipes WHERE title ILIKE $1';
        const result = await pool.query(query, [`%${title}%`]);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

exports.showNewRecipes = async() =>{
    try {
        const result = await pool.query('SELECT * FROM recipes ORDER BY id DESC LIMIT 5');
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.showRecipeComments = async (recipe_id) => {
    try {
      const result = await pool.query(
        "SELECT username1 AS recipemaker, r.title, r.ingredients, username2 AS commenter, c.comment AS comment FROM recipes r JOIN users username1 ON r.recipemaker_id = username1.id JOIN comments c ON c.recipe_id = r.id JOIN users username2 ON c.commenter_id = username2.id WHERE recipe_id = $1",
        [recipe_id]
        );
      
      if (result) {
          return result.rows;
      }
    } catch (error) {
      console.log(error);
    }
}