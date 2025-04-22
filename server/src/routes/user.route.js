
const userRoute = require("express").Router();
const {userController, userAdminController, userSignInController, userRegisterController, userEditController, userDeleteController} = require('../controllers/users.Controller.js')

{/** All Users */}
userRoute.get('/user', userController)

{/** Admin User */}
userRoute.get('/admin', userAdminController)

{/** Register User */}
userRoute.post('/register', userRegisterController)

{/** SignIn User*/}
userRoute.get('/user/:id', userSignInController)

{/** Edit User */}
userRoute.put('/user/:id', userEditController)

{/** Delete User */}
userRoute.delete('/user', userDeleteController)







module.exports = userRoute;