'use strict'

const {bookshelf} = require('../db/database')
// <Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db>

// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
const Song = bookshelf.Model.extend({
  tableName: 'Song'
},{
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows
    })
    .catch((error) => {
      return error
    })
  },
  getSong: function(SongId) {
    return this.forge(SongId)
    .fetch()
    .then((song) => {
      return song
    })
    .catch((error) => {
      return error
    })
  }
})

module.exports = ('Song', Song)
