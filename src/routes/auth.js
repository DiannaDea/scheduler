import { Router } from 'express';
import passport from 'passport';

import AuthController from '../controllers/AuthController';

const authRouter = Router();

authRouter.post('/signup',
    AuthController.signUpValidation(),
    AuthController.signUp);

authRouter.post('/signin',
    AuthController.signInValidation(),
    AuthController.singIn);

authRouter.use(passport.authenticate('jwt', { session: false }));

authRouter.post('/logout', AuthController.logout);

export default authRouter;
