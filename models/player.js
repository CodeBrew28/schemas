const { Schema, SchemaTypes } = require('mongoose');

const PlayerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }
})
  
module.exports = m => m.model('Player', PlayerSchema)
