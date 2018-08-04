import { Router } from 'express';
import passport from 'passport';

import AuthController from '../controllers/AuthController';

const authRouter = Router();

authRouter.post('/signup', AuthController.signUp);

authRouter.post('/signin', AuthController.singIn);

authRouter.post('/logout', passport.authenticate('jwt', { session: false }), AuthController.logout);

export default authRouter;
