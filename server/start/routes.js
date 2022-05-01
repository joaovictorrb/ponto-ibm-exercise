'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Auth
Route.post('/sessions', 'AuthController.verifySession')
// Fetch user for login
Route.post('/login', 'AuthController.verifyUser')
// Regiter new user
Route.post('/register', 'UserController.createUser')

// pontos
Route.post('/newPointRegistry', 'PointController.newPoint').middleware('auth:jwt')
Route.get('/showPoints', 'PointController.showPoints').middleware('auth:jwt')

// registro
Route.post('/registry', 'RegistryController.newDailyRegistry').middleware('auth:jwt')
Route.get('/registry/:month?', 'RegistryController.showRegistry').middleware('auth:jwt')
