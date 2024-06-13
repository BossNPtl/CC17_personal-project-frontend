import Joi from 'joi';

const createAlbumSchema = Joi.object({
    name: Joi.string().required(),
    picture_album: Joi.string().required(),
    description: Joi.string().required(),
    // release: Joi.string().required
}).unknown(true);

const validateCreateAlbum = input => {
    const { error } = createAlbumSchema.validate(input, { abortEarly: false });
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

export default validateCreateAlbum;