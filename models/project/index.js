let buildProject = require('./Project');
let projectSchema = require('./project-schema');
let projectValidator = require('../validator/')(projectSchema);

let makeProject = buildProject(projectValidator);

module.exports = makeProject;