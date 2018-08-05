import fs from 'fs';
import path from 'path';

import { celebrate, Joi } from 'celebrate';

import Event from '../models/Event';
import User from '../models/User';


export default class EventController {
    static async handleNoUserError(req, res, next) {
        const userId = req.user._id;

        if (!userId || !await User.findById(userId)) {
            return res.status(400).json({
                message: `No user with such id: ${userId}`
            });
        }

        req.userId = req.user._id;
        return next();
    }

    static async addEvent(req, res) {
        try {
            const { start, duration, title } = req.body;

            const event = await Event.create({
                owner: req.userId,
                start,
                duration,
                title
            });

            return (event)
                ? res.status(200).json(event)
                : res.status(400).json({
                    message: 'Unable to create event'
                });
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }

    static async deleteEvent(req, res) {
        const { id } = req.params;

        try {
            const event = await Event.findById(id);

            if (!id || !event) {
                return res.status(400).json({
                    message: `No event with such id: ${id}`
                });
            }

            await Event.deleteOne({ _id: id });

            return res.status(200).json({
                message: 'Successfully deleted'
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Unable to delete event'
            });
        }
    }

    static async getOneEvent(req, res) {
        const { id } = req.params;

        try {
            const event = await Event
                .findById(id)
                .select('_id start duration title');


            if (!id || !event) {
                return res.status(400).json({
                    message: `No event with such id: ${id}`
                });
            }

            return res.status(200).json(event);
        } catch (error) {
            return res.status(400).json({
                message: 'Unable to get event'
            });
        }
    }

    static async getAllEvents(req, res) {
        try {
            const events = await Event
                .find({ owner: req.userId })
                .select('_id start duration title');

            return (events && events.length)
                ? res.status(200).json(events)
                : res.status(204).json({
                    message: 'This user has no events'
                });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }


    static async importJSON(req, res) {
        try {
            const filename = path.join(__dirname, '../..', 'events.json');

            const events = await Event
                .find({ owner: req.userId })
                .select('_id start duration title');

            fs.writeFile(filename, JSON.stringify(events), (err) => {
                if (err) {
                    throw err;
                }

                res.attachment(filename).sendFile(filename, {}, (err) => {
                    if (err) {
                        throw err;
                    }
                    fs.unlink(filename);
                });
            });
        } catch (error) {
            return res.status(404).send({
                message: error.message
            });
        }
    }

    static addValidation() {
        return celebrate({
            body: Joi.object().keys({
                title: Joi.string().min(3).max(30).required(),
                start: Joi.number().integer().min(0).max(480)
                    .required(),
                duration: Joi.number().integer().min(1).max(480)
                    .required(),
                owner: [Joi.string(), Joi.number()]
            })
        });
    }

    static retrieveValidation() {
        return celebrate({
            params: Joi.object().keys({
                id: [Joi.string(), Joi.number()]
            })
        });
    }
}
