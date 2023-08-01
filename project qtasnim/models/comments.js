const {pool} = require('../connect');

exports.getComments = async () =>{
    try {
        const result = await pool.query('SELECT * FROM comments')
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}
exports.postComments = async(commenter_id, comment, recipemaker_id, recipe_id) =>{
    try {
        const result = await pool.query('INSERT INTO comments (commenter_id, comment, recipemaker_id, recipe_id) VALUES ($1, $2, $3, $4) RETURNING *', [commenter_id, comment, recipemaker_id, recipe_id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.putComments = async(commenter_id, comment, recipemaker_id, recipe_id ,id) =>{
    try {
        const result = await pool.query('UPDATE comments SET commenter_id = $1, comment = $2, recipemaker_id = $3, recipe_id = $4 WHERE id = $5 RETURNING *', [commenter_id, comment, recipemaker_id, recipe_id, id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}
 
exports.deleteComments = async(id) =>{
    try {
        const result = await pool.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.showComments = async () => {
    try {
      const result = await pool.query(
        "SELECT username as user, comments.comment FROM comments INNER JOIN users ON comments.commenter_id = users.id"
      );
      if (result) {
        return result.rows;
      }
    } catch (error) {
      console.log(error);
    }
  };