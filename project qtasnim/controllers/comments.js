const {getComments, postComments, putComments, deleteComments, showComments} = require('../models/comments');

exports.getAllComment = async(req, res) => {
    try {
        const data = await getComments();
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.createComment = async(req, res) => {
    try {
        const { commenter_id, comment, recipemaker_id, recipe_id } = req.body;
        const data = await postComments(commenter_id, comment, recipemaker_id, recipe_id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.updateComment = async(req, res) => {
    try {
        const { id } = req.params
        const { commenter_id, comment, recipemaker_id, recipe_id } = req.body
        const data = await putComments(commenter_id, comment, recipemaker_id, recipe_id ,id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.dropComment = async(req, res) => {
    try {
        const { id } = req.params
        const data = await deleteComments(id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.showComment = async (req, res) => {
    try {
      const show = await showComments();
      if (show) {
        res.status(200).send(show);
      }
    } catch (error) {
      res.send(error);
    }
  };