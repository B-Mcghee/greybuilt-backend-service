let User = require('../../../db/models/user');
let makeUser = require('../../../models/user/index');
let serialize = require('./serializer');


let listUsers = () => {
    return User.find({})
      .then(serialize)
  }
  
  let findUser = (prop, val) => {
    if (prop === 'id') {
      prop = '_id'
    }
    return User.find({[prop]: val})
      .then(resp => {
        return serialize(resp[0])
      })
  }
  
  let findUsersBy = (prop, val) => {
    return User.find({[prop]: val})
      .then(serialize)
  }

  let createUser = (userInfo) => {
    let user = makeUser(userInfo)
    let newUser = {
      name: user.getName(),
      email: user.getEmail(),
      phoneNumber: user.getphoneNumber(),
      role: user.getRole()
    }
    return User.create(newUser)
      .then(serialize)
  }


let deleteUser = (id) => {
    return User.findByIdAndDelete(id)
      .then(resp => {
        return {
          id: resp._id.toString(),
          status: 'success'
        }
      })
      .catch(err => {
        return {
          status: 'fail'
        }
      })
  }
  
  let dropAll = () => {
    return User.remove()
  }
  
  module.exports = {
    listUsers,
    findUser,
    findUsersBy,
    createUser,
    deleteUser,
    dropAll
  }
  