const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lassName: {
        type: String
    },
    email: {
        type: String
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]

})

const User = mongoose.model('User', userSchema);

module.exports = User;