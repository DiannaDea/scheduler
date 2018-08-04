import mongoose from 'mongoose';
import handleDuplicateErr from '../middlewares/mongooseDuplicate';

const { Schema } = mongoose;

const UserSchema = Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    events: [{
        type: Schema.Types.ObjectId, ref: 'Event'
    }]
});

UserSchema.post('save', handleDuplicateErr);

const User = mongoose.model('User', UserSchema);

export default User;
