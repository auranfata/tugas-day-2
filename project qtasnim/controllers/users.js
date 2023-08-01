const {getUsers, postUsers, putUsers, deleteUsers} = require('../models/users');

exports.getAllUser = async(req, res) => {
    try {
        const data = await getUsers();
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.createUser = async(req, res) => {
    try {
        const { email, username, password, phone_number } = req.body;
        const data = await postUsers(email, username, password, phone_number);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.updateUser = async(req, res) => {
    try {
        const { id } = req.params
        const {email, username, password, phone_number} = req.body
        const data = await putUsers(email, username, password, phone_number, id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}

exports.dropUser = async(req, res) => {
    try {
        const { id } = req.params
        const data = await deleteUsers(id);
        if(data){
            res.status(200).send(data);
        }
    } catch (error) {
        res.send(error);
    }
}