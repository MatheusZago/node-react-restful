const userRepository = require('../repositories/user-repository');

const createUser = async (name, email) => {
    const newUser = await userRepository.createUser(name, email);
    return newUser;
}

const getUsers = async () => {
    const users = await userRepository.getUsers();
    return users;
}

const getUserById = async (id) => {
    const user = await userRepository.getUserByid(id);
    return user;
}

module.exports = {
    createUser,
    getUsers,
    getUserById
}