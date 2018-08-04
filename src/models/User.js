import mongoose from 'mongoose';

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

const User = mongoose.model('User', UserSchema);

export default User;
