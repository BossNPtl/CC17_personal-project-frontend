import Joi from 'joi';
// import { validate } from 'uuid';

const registerSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false }}).required().trim()
    .messages({ 
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email'
     }),
    name: Joi.string().pattern(/^[a-zA-Z0-9]{3,}$/)
    .messages({ 
        'string.empty': 'Name is required.',
        'string.pattern.base': 'More then 3 characters and contain only alphabet and number.',

    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,}$/)
    .messages({ 
        'string.empty': 'Password is required.',
        'string.pattern.base': 'Password must be at least 8 characters and contain only alphabet and number.'
     }),
    // password: Joi.string().pattern(/^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.{8,})/),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).strip()
    .messages({ 
        'string.empty': 'Confirm password is required.',
        'any.only': 'Password and confirm password did not match.'
    })
});

const validateRegister = input => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
    if (error) {
        console.log(error.details)
        const result = error.details.reduce((acc, item) => {
            acc[item.path[0]] = item.message;
            return acc;
        }, {});

        return result;
    }
};

export default validateRegister;