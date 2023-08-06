const _userController = require('./user.controller');
const _userValidator = require('./user.validators');
const prefix = '/api/v1/user';

module.exports = (app) => {
    app
        .route(prefix + '/createUser')
        // .all(_userValidator.validateCreateUserSchema)
        .post(_userController.createUser);

    app
        .route(prefix + '/getUsers')
        .get(_userController.getAllUsers); 
    
    // app
    //     .route(prefix + '/delete_user')
    //     .post(_userController.deleteUser);   
    // app
    //     .route(prefix + '/update_user')
    //     .put(_userController.updateUser);      
}
 