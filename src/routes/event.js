import passport from 'passport';
import { errors } from 'celebrate';

import { Router } from 'express';

import EventController from '../controllers/EventController';

const eventRouter = Router();


eventRouter.use(passport.authenticate('jwt', { session: false }));


eventRouter.use(EventController.handleNoUserError);


eventRouter.post('/',
    EventController.addValidation(),
    EventController.addEvent);

eventRouter.get('/', EventController.getAllEvents);


eventRouter.delete('/:id',
    EventController.retrieveValidation(),
    EventController.deleteEvent);

eventRouter.get('/:id',
    EventController.retrieveValidation(),
    EventController.getOneEvent);


export default eventRouter;
