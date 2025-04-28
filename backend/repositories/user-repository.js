const db = require('../database')

const createUser = async(name, email) => {
    const [newUserId] = await db('users')
    .insert({name, email})
    .returning('*');
}

module.exports = {createUser}