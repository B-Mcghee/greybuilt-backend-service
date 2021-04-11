let buildBio = require('./Bio');
let bioSchema = require('./bio-schema');
let bioValidator = require('../validator/')(bioSchema);

let makeBio = buildBio(bioValidator);

module.exports = makeBio;