const { Schema, SchemaTypes } = require('mongoose');


const FilesSchema = new Schema({
    name: { type: String, required: true, unique: true },
})
  

module.exports = m => m.model('Files', FilesSchema)