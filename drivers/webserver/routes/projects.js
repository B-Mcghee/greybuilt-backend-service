let projectsDb = require('../../../data-access/projects-db/memory/index')

let projects = module.exports = {}

projects.index = (req, res, next) => {
  projectsDb.listProjects()
    .then(data => {
      console.log(data)
      res.send(data)
    })
}

projects.show = (req, res, next) => {
  projectsDb.findProject('id', req.params.id)
    .then(data => {
      res.send(data)
    })
}

projects.create = (req, res, next) => {
  projectsDb.addProject(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}