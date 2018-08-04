import mongoose from 'mongoose';

const { Schema } = mongoose;

const EventSchema = Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    start: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('Event', EventSchema);

export default Event;
