const userService = require('./user.services')
const errors = {}
exports.createUser = async (req, res, next) => {
   
    try {
        const userPayload = req.body
        const result = await userService.doCreateUser(userPayload)
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }  
}
exports.getAllUsers = async (req, res, next) => {
    try {
        const result = await userService.doGetAllUsers()
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }
}
exports.deleteUser = async (req, res, next) => {
    try {
        let UserId = req.body.UserId
        const result = await userService.doDeleteUser(UserId)
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }
}
exports.updateUser = async (req, res, next) => {
    try {
        let data = req.body
        const result = await userService.doUpdateUser(data)
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }
}



 