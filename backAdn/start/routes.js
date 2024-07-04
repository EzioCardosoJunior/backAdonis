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

Route.on('/').render('welcome')


Route.get('users', 'UserController.index')
Route.post('users', 'UserController.store')
/* 
Route.get('users/:id/curriculums', 'CurriculumController.index').middleware('auth')
Route.post('users/:id/curriculums', 'CurriculumController.store').middleware('auth') */

Route.post('register', 'AuthController.register')
Route.post('login', 'AuthController.login')

Route.post('orders', 'OrderController.store')
Route.get('orders', 'OrderController.index')

Route.post('products', 'ProductController.store')
Route.get('products', 'ProductController.index')

Route.post('product-groups', 'ProductGroupController.store')
Route.get('product-groups', 'ProductGroupController.index')

Route.post('product-subgroups', 'ProductSubgroupController.store')
Route.get('product-subgroups', 'ProductSubgroupController.index')

Route.post('products/:id/add-to-stock', 'ProductController.addToStock')

Route.post('stocks', 'StockController.addStock')
Route.get('stocks', 'StockController.index')
