const { Schema, SchemaTypes } = require('mongoose');

const FilesSchema = new Schema({
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    owner: { type: SchemaTypes.ObjectId, ref: 'Team' }
})
  
module.exports = m => m.model('Files', FilesSchema)
