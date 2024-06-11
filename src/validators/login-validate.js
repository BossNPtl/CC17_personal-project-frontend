import Joi from 'joi';

const loginSchema = Joi.object({
    email: Joi.string().required()
    .messages({ 'string.empty': 'Email is required.' }),
    password: Joi.string().required()
    .messages({ 'string.empty': 'Password is required.' })
});

const validateLogin = input => {
    const { error } = loginSchema.validate(input, { abortEarly: false });
    if (error) {
        // Check error
        console.log(error.details)
        const result = error.details.reduce((acc, item) => {
            acc[item.path[0]] = item.message;
            return acc;
        }, []);
        
        return result;
    }
};

export default validateLogin;