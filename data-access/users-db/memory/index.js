let USERS = require('../../../db/memory/users') // DB
let makeUser = require('../../../models/user/index') // model
let serialize = require('./serializer') // serializer custom to db

let listUsers = () => {
  console.log(USERS);
  return Promise.resolve(serialize(USERS))
}

let findUser = (prop, val) => {
  if (prop === 'id') { prop = 'serial' }
  let user = USERS.find(user => user[prop] == val)
  return Promise.resolve(serialize(user))
}

let findUsersBy = (prop, val) => {
  if (prop === 'email') {prop = 'email'}
  let user = USERS.filter(user => user[prop] == val)
  return Promise.resolve(serialize(user))
}

let addUser = (userInfo) => {
  let user = makeUser(userInfo)
  let newUser = {
    serial: USERS.length + 1,
    year: user.getGrade(),
    name: user.getName(),
    phoneNumber: user.getPhoneNumber(),
    role: user.isRole()
  }
  USERS.push(newUser)
  return findUser('serial', newUser.serial)
}

let deleteUser = (id) => {
  return findUser({id})
    .then(user => {
      if (user.id == id) {
        USERS = USERS.filter(user => user.serial != id)
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
  USERS = [];
  return USERS;
}

module.exports = {
  listUsers,
  findUser,
  findUsersBy,
  addUser,
  deleteUser,
  dropAll
}