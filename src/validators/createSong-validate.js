import Joi from 'joi';

const createSongSchema = Joi.object({
    no: Joi.string().required(),
    title: Joi.string().required(),
    writer: Joi.string().required(),
    length: Joi.string().required()
}).unknown(true);

const validateCreateSong = input => {
    const { error } = createSongSchema.validate(input, { abortEarly: false });
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

export default validateCreateSong;