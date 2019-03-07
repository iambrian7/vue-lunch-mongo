// const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// const SongsController = require('./controllers/SongsController')
const LunchesController = require('./controllers/LunchesController')
// const BookmarksController = require('./controllers/BookmarksController')
// const HistoriesController = require('./controllers/HistoriesController')
// const MeetingsController = require('./controllers/MeetingsController')

// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.get('/lunches', LunchesController.index)
  app.get('/lunches/:lunchId', LunchesController.show)
}

// module.exports = (app) => {
 // app.post('/register',
    // AuthenticationControllerPolicy.register,
  //   AuthenticationController.register)
  // app.post('/login',
  //   AuthenticationController.login)

  // app.get('/lunches', LunchesController.index)
  // app.get('/lunches/:lunchId',
  // LunchesController.show)
  // app.put('/lunches/:lunchId',
  // LunchesController.put)
  // app.post('/lunches',
  // LunchesController.post)


  // app.get('/songs',
  //   SongsController.index)
  // app.get('/songs/:songId',
  //   SongsController.show)
  // app.put('/songs/:songId',
  //   SongsController.put)
  // app.post('/songs',
  //   SongsController.post)

  // app.get('/bookmarks',
  //   isAuthenticated,
  //   BookmarksController.index)
  // app.post('/bookmarks',
  //   isAuthenticated,
  //   BookmarksController.post)
  // app.delete('/bookmarks/:bookmarkId',
  //   isAuthenticated,
  //   BookmarksController.remove)

  // app.get('/histories',
  //   isAuthenticated,
  //   HistoriesController.index)
  // app.post('/histories',
  //   isAuthenticated,
  //   HistoriesController.post)

  // app.get('/meetings',
  //   MeetingsController.get)
// }