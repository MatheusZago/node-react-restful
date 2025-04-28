const db = require('../database')

const createUser = async(name, email) => {
    const [newUserId] = await db('users').insert({name, email}).returning('*');
}

const getUsers = async() => {
    const users = await db('users').select('*');
    return users;
}

module.exports = {
    createUser,
    getUsers
};