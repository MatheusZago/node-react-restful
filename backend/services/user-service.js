const userRepository = require('../repositories/user-repository');

const createUser = async (name, email) => {
    const newUser = await userRepository.createUser(name, email);
    return newUser;
}

const getUsers = async () => {
    const users = await userRepository.getUsers();
    return users;
}

module.exports = {
    createUser,
    getUsers
}