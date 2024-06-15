import Joi from 'joi';

const createCommentSchema = Joi.object({
    message: Joi.string().required(),
}).unknown(true);

const validateCreateComment = input => {
    const { error } = createCommentSchema.validate(input, { abortEarly: false });
    if (error) {
        // Check error
        console.log(error.details)
        const result = error.details.reduce((acc, item) => {
            acc[item.path[0]] = item.message;
            return acc;
        }, {});

        return result;
    }
};

export default validateCreateComment;