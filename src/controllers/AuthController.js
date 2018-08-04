import passport from 'passport';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pick from 'lodash.pick';

import User from '../models/User';
import devConfig from '../config';

const { SECRET, EXPIRES_IN } = devConfig.token;

// TODO add JOI validation
// TODO add simple id
// TODO find module for better send response

export default class AuthController {
    static async signUp(req, res) {
        const { email, password, username } = req.body;

        try {
            const salt = await bcrypt.genSalt(10);

            const hash = await bcrypt.hash(password, salt);

            if (!hash) {
                throw new Error('Unable to generate hash');
            }

            const user = await User.create({
                _id: new mongoose.Types.ObjectId(),
                username,
                email,
                password: hash
            });

            return (user)
                ? res.status(200).json(user)
                : res.status(400).json({ message: 'Unable to create user' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static singIn(req, res) {
        try {
            return passport.authenticate('local', { session: false }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                        message: 'Incorrect email or password'
                    });
                }

                return req.login(user, { session: false }, (err) => {
                    const token = jwt.sign(
                        pick(user, ['_id', 'email', 'username']),
                        SECRET, {
                            expiresIn: EXPIRES_IN
                        }
                    );

                    return res.status(200).json({ token });
                });
            })(req, res);
        } catch (error) {
            return res.status(400).json({
                message: `Unable to login, error: ${error.message}`
            });
        }
    }

    static logout(req, res) {
        try {
            if (!req.isAuthenticated()) {
                return res.status(400).json({
                    message: 'Unable to logout'
                });
            }
            req.logout();

            return res.status(200).json({
                message: 'Logged out'
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
}
