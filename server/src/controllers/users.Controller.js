
{/** Get All Users */}
const userController = (req, res)=>{
    try {

    } catch (error) {
        
    }
}

{/** Admin User */}
const userAdminController = (req, res)=>{
    try {
        res.status(200).json({
            'status' : true,
            'message' : 'sucessfull'
        })
    } catch (error) {
        
    }
}

{/** SignIn User */}
const userSignInController = (req, res)=>{
    try {

    } catch (error) {
        
    }
}

{/** Create User */}
const userRegisterController = (req, res)=>{
    try {

    } catch (error) {
        console.log(error)
        res.json({
            'response' : false,
            'message' : error.message
        })
    }
}

{/** Edit User */}
const userEditController = (req, res)=>{
    try {

    } catch (error) {
        
    }
}

{/** Delete User */}
const userDeleteController = (req, res)=>{
    try {

    } catch (error) {
        
    }
}

module.exports = {userController, userAdminController, userSignInController, userRegisterController, userEditController, userDeleteController}