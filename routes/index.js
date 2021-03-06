'use strict'

// <require express Router and require the songs.js router file>
const {Router} = require('express')
const router = Router()
const songsRouter = require('./songs')

// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)
router.get('/', (req, res, next) => {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:3000/api/v1/songs",
    "songById": "http://localhost:3000/api/v1/songs/:songId"
  });
});

router.use(songsRouter)

module.exports = router
