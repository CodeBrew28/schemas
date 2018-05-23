const { Schema, SchemaTypes } = require('mongoose');
const TeamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
})
  
module.exports = m => m.model('Team', TeamSchema)