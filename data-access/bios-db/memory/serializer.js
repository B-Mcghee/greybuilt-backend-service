const _serializeSingle = (bio) => {
    return {
      'id': bio.serial,
      'position': bio.position,
      'user': bio.user,
      'avatar': bio.avatar
      
    };
  };
  
  const serializer = (data) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
  }
  
  module.exports = serializer