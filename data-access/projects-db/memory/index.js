let PROJECTS = require('../../../db/memory/projects') // DB
let makeProject = require('../../../models/project/index') // model
let serialize = require('./serializer') // serializer custom to db

let listProjects = () => {
  console.log(PROJECTS);
  return Promise.resolve(serialize(PROJECTS))
}

let findProject = (prop, val) => {
  if (prop === 'id') { prop = 'serial' }
  let project = PROJECTS.find(project => project[prop] == val)
  return Promise.resolve(serialize(project))
}

let findProjectsBy = (prop, val) => {
  if (prop === 'title') {prop = 'title'}
  let project = PROJECTS.filter(project => project[prop] == val)
  return Promise.resolve(serialize(project))
}

let addProject = (projectInfo) => {
  let project = makeProject(projectInfo)
  let newProject = {
    serial: PROJECTS.length + 1,
    title: project.getTitle(),
    description: project.getDescription(),
    coverImage: project.getCoverImage(),
    images: project.getImages(),
    squareFeet: project.getSquareFeet(),
    beds:project.getBeds(),
    baths:project.getBaths()
  }
  PROJECTS.push(newProject)
  return findProject('serial', newProject.serial)
}

let deleteProject = (id) => {
  return findProject({id})
    .then(project => {
      if (project.id == id) {
        PROJECTS = PROJECTS.filter(project => project.serial != id)
        return {
          id,
          status: 'success'
        }
      }
      return {
        status: 'fail'
      }
    })
}

let dropAll = () => {
  PROJECTS = [];
  return PROJECTS;
}

module.exports = {
  listProjects,
  findProject,
  findProjectsBy,
  addProject,
  deleteProject,
  dropAll
}