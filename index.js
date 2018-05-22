const Files = require('./models/files')

module.exports = mongoose => ({
  Files: Files(mongoose),
})