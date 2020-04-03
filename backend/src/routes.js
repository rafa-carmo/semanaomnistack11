const express = require('express')
const OngController = require('./controllers/OngsControllers')
const IncidentsController = require('./controllers/IncidentControllers')
const ProfileController = require('./controllers/ProfileControllers')
const SessionController = require('./controllers/SessionController')



const routes = express.Router()


routes.post('/sessions', SessionController.create)


routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)


routes.post('/incidents', IncidentsController.create)
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)



routes.get('/profile', ProfileController.index)



module.exports = routes
