import passport from 'passport';
import passportJWT from 'passport-jwt';
import passportLocal from 'passport-local';

import bcryptjs from 'bcryptjs';

import User from '../models/User';
import devConfig from '../config';

const LocalStrategy = passportLocal.Strategy;

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const localOptions = {
    usernameField: 'email',
    passwordField: 'password'
};
const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: devConfig.token.SECRET
};


passport.use(new LocalStrategy(
    localOptions,
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return done(null, false);
            }

            const samePasswords = await bcryptjs.compare(password, user.password);

            return (samePasswords)
                ? done(null, user)
                : done(null, false);
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new JWTStrategy(
    jwtOptions,
    async (jwtPayload, done) => {
        try {
            const user = await User.findById(jwtPayload._id);

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));
