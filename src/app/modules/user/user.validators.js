const errorParser = require('../../common/helpers/error.parser');
const {
    studentCreateSchema
} = require('./validators/other.validator');

exports.validateCreateStudentSchema = async (req, res, next) => {
    const { error } = studentCreateSchema.validate(req.body)
    if (!error) next();
    else {
        return res.error.BadRequest('BadRequest', errorParser.ValidationError(error));
    }
};

