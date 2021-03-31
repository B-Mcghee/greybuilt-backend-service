const _serializeSingle = (user) => {
    return {
      'id': user.serial,
      'email': user.email,
      'name': user.name,
      'phoneNumber': user.phoneNumber,
      'role': user.role
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