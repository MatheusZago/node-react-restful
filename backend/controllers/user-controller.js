const userService = require('../services/user-service');

const createUser = async (req, res) => {
    const {name, email} = req.body;

    const newUser = await userService.createUser(name, email);
    res.status(201).json({id: newUser, name, email})
}

const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, name } = req.body;

    const user = await userService.updateUser(id, name, email);
    return res.status(200).json(user);

}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const result = await userService.deleteUser(id);
    return res.status(200).json(result);

}

module.exports = {
    createUser,
    getUsers, 
    getUserById,
    updateUser,
    deleteUser
}