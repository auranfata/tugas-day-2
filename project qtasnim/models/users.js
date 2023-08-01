const {pool} = require('../connect');

exports.getUsers = async () =>{
    try {
        const result = await pool.query('SELECT * FROM users')
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}
exports.postUsers = async(email, username, password, phone_number) =>{
    try {
        const result = await pool.query('INSERT INTO users (email, username, password, phone_number) VALUES ($1, $2, $3, $4) RETURNING *', [email, username, password, phone_number]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.putUsers = async(email, username, password, phone_number, id) =>{
    try {
        const result = await pool.query('UPDATE users SET email = $1, username = $2, password = $3, phone_number = $4 WHERE id = $5 RETURNING *', [email, username, password, phone_number, id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}
 
exports.deleteUsers = async(id) =>{
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        if(result){
            return result.rows;
        }
    } catch (error) {
        console.log(error);
    }
}