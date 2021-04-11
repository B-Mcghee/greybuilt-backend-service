let biosDb = require('../../../data-access/bios-db/memory/index')

let bios = module.exports = {}

bios.index = (req, res, next) => {
  biosDb.listBios()
    .then(data => {
      res.send(data)
    })
}

bios.show = (req, res, next) => {
  biosDb.findBio('id', req.params.id)
    .then(data => {
      res.send(data)
    })
}

bios.create = (req, res, next) => {
  biosDb.addBio(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}