
const User = require('../models/User')
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        return res.status(200).json({users})
    } catch (error) {
        next(error);
    }
}

const createNewUser = async (req, res, next) => {
    try {
        const body = req.body;
        const newUser = new User(body);
        console.log(newUser);

        await newUser.save();
        return res.status(201).json({newUser})
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUsers,
    createNewUser
}