const db = require('../database')

const createUser = async(name, email) => {
    const [newUserId] = await db('users').insert({name, email}).returning('*');
}

const getUsers = async() => {
    const users = await db('users').select('*');
    return users;
}

const getUserByid = async (id) => {
    const user = await db('users').where({id}).first();
    return user;
}

const updateUser = async (id, name, email) =>{
    const user = await db('users').where('id', id).update({name, email}).returning(['email', 'name']); 
    return user[0];
}

const deleteUser = async (id) => {
    const result = await db('users').where('id', id).del();
    return result;
}

module.exports = {
    createUser,
    getUsers,
    getUserByid,
    updateUser,
    deleteUser
};