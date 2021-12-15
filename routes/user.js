const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.route('/')
    .get(userController.getUsers)
    .post(userController.createNewUser)
    .patch()
    .put()
    .delete()


module.exports = router;