const Files = require('./models/files')
const Team = require('./models/team')
const Player = require('./models/player')

module.exports = mongoose => ({
  Files: Files(mongoose),
  Team: Team(mongoose),
  Player: Player(mongoose),
})