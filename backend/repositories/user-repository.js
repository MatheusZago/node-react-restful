const db = require('../config/database');
const User = require('../model/user');

const createUser = async (user) => {
    const [newUser] = await db('users')
        .insert({name: user.getName(), email: user.getEmail()})
        .returning('*');

    return new User(newUser.id, newUser.name, newUser.email);
};

const getUsers = async () => {
    const users = await db('users').select('*');

    return users.map(u => new User(u.id, u.name, u.email));
};

const getUserByid = async (id) => {
    const user = await db('users').where({ id }).first();

    if(!user) return null;

    return new User(user.id, user.name, user.email);
};

const updateUser = async (user) => {
    const [updated] = await db('users')
        .where({ id: user.getId() })
        .update({name: user.getName(), email: user.getEmail()
        })
        .returning(['id', 'name', 'email']);

    if(!updated) return null;

    return new User(updated.id, updated.name, updated.email);
};

const deleteUser = async (id) => {
    const result = await db('users').where({ id }).del();
    return result;
};

const getUserByEmail = async (email) => {
    const user = await db('users').where({ email }).first();

    if(!user) return null;

    return new User(user.id, user.name, user.email);
}

module.exports = {
    createUser,
    getUsers,
    getUserByid,
    updateUser,
    deleteUser,
    getUserByEmail
};