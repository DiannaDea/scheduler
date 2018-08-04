export default (error, res, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('User with such email already exists'));
    } else {
        next();
    }
};
