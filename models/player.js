const { Schema, SchemaTypes } = require('mongoose');

const PlayerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    passqord: { type: String, required: true, unique: true },
    team: { type: SchemaTypes.ObjectId, ref: 'Team' }
})
  
module.exports = m => m.model('Player', PlayerSchema)
