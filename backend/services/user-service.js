const { update } = require('../database');
const NotFoundException = require('../exceptions/not-found-exception');
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

    if (!user) {
        throw new NotFoundException("User with id " + id + " not found");
    }
    return user;
}

const updateUser = async (id, name, email) => {
    const user = await userRepository.updateUser(id, name, email);

    if (user.length == 0) {
        throw new Error("User with id " + id + " not found");
    }

    return user;
}

const deleteUser = async (id) => {
    const result = await userRepository.deleteUser(id);

    //    if(result == 0 ){
    //        throw new Error("User with id " + id + " not found.");
    //    }

    return { message: "User with id " + id + " deleted successfully." };

}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}