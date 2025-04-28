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

module.exports = {
    createUser,
    getUsers,
    getUserByid
};