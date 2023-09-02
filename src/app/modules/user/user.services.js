const userModel = require('./user.model')
const logger = require('../../common/logger/logs');

exports.doCreateUser = async (data) => {
    try {

        let user = data;
        console.log(user)
        const result = await userModel.create(user);
        logger.info("/modules/auth/user.services.js:"," doCreateUser ", result);
        if (result) {
            return {
                status: true,
                data: {
                    message: "user Created Successfully"
                }
            }
        }else{
            return {
                status: false,
                data: "Error while creating user"
            }
        }

       
    } catch (error) {
        logger.error("/modules/user/user.services.js:"," doCreateUser ", error);
        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while creating user, Try after some time!"
            }
        }
    }
}
exports.doGetAllUsers = async () => {
    try {
        let result = await userModel.find()
        logger.info("/modules/user/user.services.js:"," doGetAllUsers ", result);
        if (result) {
            return {
                status: true,
                data: result
            }
        }else{
            return {
                status: false,
                data: "Error while getting all students"
            }
        }
        
    } catch (error) {
        logger.error("/modules/user/user.services.js:"," doGetAllStudents ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while getting users, Try after some time!"
            }
        }
    }
}
exports.doDeleteStudent = async (userId) => {
    try {
        let result = await userModel.findByIdAndDelete(userId)
        logger.info("/modules/user/user.services.js:"," doDeleteUser ", result);
        if (result) {
            return {
                status: true,
                message: "User deleted Successfully"
            }
        }else{
            return {
                status: false,
                data: "Error while deleting  User"
            }
        }
        
    } catch (error) {
        logger.error("/modules/user/user.services.js:"," doDeleteUser ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while deleting user, Try after some time!"
            }
        }
    }
}
exports.doUpdateUser = async (data) => {
    try {
        let user = data;
        let result = await userModel.findByIdAndUpdate(user.userId,{firstName:user.firstName,lastName:user.lastName})

        logger.info("/modules/user/user.services.js:"," doUpdateUser ", result);
        if (result) {
            return {
                status: true,
                message: "User updated Successfully"
            }
        }else{
            return {
                status: false,
                data: "Error while updating User"
            }
        }
        
    } catch (error) {
        logger.error("/modules/user/user.services.js:"," doUpdateUser ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while updating User, Try after some time!"
            }
        }
    }
}

