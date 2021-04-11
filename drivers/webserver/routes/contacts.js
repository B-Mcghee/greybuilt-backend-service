let contactsDb = require('../../../data-access/contacts-db/memory/index')

let contacts = module.exports = {}

contacts.index = (req, res, next) => {
  contactsDb.listContacts()
    .then(data => {
      res.send(data)
    })
}

contacts.show = (req, res, next) => {
  contactsDb.findContact('id', req.params.id)
    .then(data => {
      res.send(data)
    })
}

contacts.create = (req, res, next) => {
  contactsDb.addContact(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}