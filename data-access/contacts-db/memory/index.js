let CONTACTS = require('../../../db/memory/contacts') // DB
let makeContact = require('../../../models/contact/index') // model
let serialize = require('./serializer') // serializer custom to db

let listContacts = () => {
  console.log(CONTACTS);
  return Promise.resolve(serialize(CONTACTS))
}

let findContact = (prop, val) => {
  if (prop === 'id') { prop = 'serial' }
  let contact = CONTACTS.find(contact => contact[prop] == val)
  return Promise.resolve(serialize(contact))
}

let findContactsBy = (prop, val) => {
  if (prop === 'title') {prop = 'title'}
  let contact = CONTACTS.filter(contact => contact[prop] == val)
  return Promise.resolve(serialize(contact))
}

let addContact = (contactInfo) => {
  let contact = makeContact(contactInfo)
  let newContact = {
    serial: CONTACTS.length + 1,
    firstName: contact.getFirstName(),
    lastName: contact.getLastName(),
    email: contact.getEmail(),
    phoneNumber: contact.getPhoneNumber(),
    potentialCity: contact.getPotentialCity(),
    priceRange: contact.getPriceRange(),
    squareFootage: contact.getSquareFootage(),
    appointmentTime: contact.getAppointmentTime(),
  }
  CONTACTS.push(newContact)
  return findContact('serial', newContact.serial)
}

let deleteContact = (id) => {
  return findContact({id})
    .then(contact => {
      if (contact.id == id) {
        CONTACTS = CONTACTS.filter(contact => contact.serial != id)
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
  CONTACTS = [];
  return CONTACTS;
}

module.exports = {
  listContacts,
  findContact,
  findContactsBy,
  addContact,
  deleteContact,
  dropAll
}