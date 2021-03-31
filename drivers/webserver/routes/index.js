const express = require('express')
const router = express.Router()

const users = require('./users')
const projects = require('./projects')
// const projects = require('./projects')

router
  .get('/users', users.index)
  .get('/users/:id', users.show)
  .post('/users', users.create)

router
  .get('/projects', projects.index)
  .get('/projects/:id', projects.show)
  .post('/projects', projects.create)
  

module.exports = router