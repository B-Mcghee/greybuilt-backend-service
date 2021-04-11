let buildContact = require('./Contact');
let contactSchema = require('./contact-schema');
let contactValidator = require('../validator/')(contactSchema);

let makeContact = buildContact(contactValidator);

module.exports = makeContact;