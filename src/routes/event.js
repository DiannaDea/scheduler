import passport from 'passport';
import { Router } from 'express';

import EventController from '../controllers/EventController';

const eventRouter = Router();


eventRouter.use(passport.authenticate('jwt', { session: false }));


eventRouter.use(EventController.handleNoUserError);


eventRouter.post('/', EventController.addEvent);

eventRouter.get('/', EventController.getAllEvents);



eventRouter.delete('/:id', EventController.deleteEvent);

eventRouter.get('/:id', EventController.getOneEvent);


export default eventRouter;
