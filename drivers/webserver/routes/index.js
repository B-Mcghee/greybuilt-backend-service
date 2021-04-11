const express = require('express')
const router = express.Router()

const users = require('./users')
const projects = require('./projects')
const bios = require('./bios')
const contacts = require('./contacts')
// const projects = require('./projects')

router
  .get('/users', users.index)
  .get('/users/:id', users.show)
  .post('/users', users.create)

router
  .get('/projects', projects.index)
  .get('/projects/:id', projects.show)
  .post('/projects', projects.create)

  router
  .get('/bios', bios.index)
  .get('/bios/:id', bios.show)
  .post('/bios', bios.create)

  router
  .get('/contacts', contacts.index)
  .get('/contacts/:id', contacts.show)
  .post('/contacts', contacts.create)


  

module.exports = router