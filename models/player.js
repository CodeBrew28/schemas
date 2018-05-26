const { Schema, SchemaTypes } = require('mongoose');

const PlayerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    owner: { type: SchemaTypes.ObjectId, ref: 'Team' }
})
  
module.exports = m => m.model('Player', PlayerSchema)
