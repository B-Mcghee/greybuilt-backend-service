let buildUser = require('./User');
let userSchema = require('./user-schema');
let userValidator = require('../validator/')(userSchema);

let makeUser = buildUser(userValidator);

module.exports = makeUser;