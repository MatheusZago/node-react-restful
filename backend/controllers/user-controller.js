const userService = require('../services/user-service');

const createUser = async (req, res) => {
    const {name, email} = req.body;

    const newUser = await userService.createUser(name, email);
    res.status(201).json({id: newUser, name, email})
}

module.exports = {createUser}