const Joi = require('joi');
function validateContact(contact) {
    const JoiSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        favoriteColor: Joi.string().required(),
        birthday: Joi.string().required()
    }).options({ abortEarly: false });
    return JoiSchema.validate(contact);
}module.exports = {
    validateContact};