'use strict'

// <require a song model>
// < use model methods for getting all songs and one song then send the response back with the data>
// <stretch goal: methods for adding, deleting, editing a song>
const {bookshelf} = require('../db/database')
const Song = require('../models/song')

module.exports.getSingleSong = ({params:{SongId}}, res, next) => {
  Song.getSong({SongId})
  .then((song) => {
    res.status(200).json(show)
  })
  .catch((error) => {
    next(error)
  })
}

module.exports.getAllShows = (req, res, next) => {
  Song.getAll()
  .then((songs) => {
    res.status(200).json(songs)
  })
  .catch((error) => {
    next(error)
  })
}
