let usersDb = require('../../../data-access/users-db/memory/index')

let users = module.exports = {}

users.index = (req, res, next) => {
  usersDb.listUsers()
    .then(data => {
      res.send(data)
    })
}

users.show = (req, res, next) => {
  usersDb.findUser('id', req.params.id)
    .then(data => {

      res.send(data)
    })
}

users.create = (req, res, next) => {
  usersDb.createUser(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}