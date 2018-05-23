const Files = require('./models/files')
const Team = require('./models/team')
module.exports = mongoose => ({
  Files: Files(mongoose),
  Team: Team(mongoose),
})