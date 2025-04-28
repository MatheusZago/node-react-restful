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

module.exports = {
    createUser,
    getUsers
}