let BIOS = require('../../../db/memory/bios') // DB
let makeBio = require('../../../models/bio/index') // model
let serialize = require('./serializer') // serializer custom to db

let listBios = () => {
  console.log(BIOS);
  return Promise.resolve(serialize(BIOS))
}

let findBio = (prop, val) => {
  if (prop === 'id') { prop = 'serial' }
  let bio = BIOS.find(bio => bio[prop] == val)
  return Promise.resolve(serialize(bio))
}

let findBiosBy = (prop, val) => {
  if (prop === 'title') {prop = 'title'}
  let bio = BIOS.filter(bio => bio[prop] == val)
  return Promise.resolve(serialize(bio))
}

let addBio = (bioInfo) => {
  let bio = makeBio(bioInfo)
  let newBio = {
    serial: BIOS.length + 1,
    position: bio.getPosition(),
    user: bio.getUser(),
    avatar: bio.getAvatar()
  }
  BIOS.push(newBio)
  return findBio('serial', newBio.serial)
}

let deleteBio = (id) => {
  return findBio({id})
    .then(bio => {
      if (bio.id == id) {
        BIOS = BIOS.filter(bio => bio.serial != id)
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
  BIOS = [];
  return BIOS;
}

module.exports = {
  listBios,
  findBio,
  findBiosBy,
  addBio,
  deleteBio,
  dropAll
}