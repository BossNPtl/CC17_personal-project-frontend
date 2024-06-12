import Joi from 'joi';

const renameSchema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z0-9]{3,}$/)
});

const validateRename = input => {
    const { error } = renameSchema.validate(input, { abortEarly: false });
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

export default validateRename;