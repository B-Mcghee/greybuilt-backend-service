const _serializeSingle = (contact) => {
    return {
        'id': contact.serial,
        'firstName': contact.firstName,
        'lastName': contact.lastName,
        'email': contact.email,
        'phoneNumber': contact.phoneNumber,
        'potentialCity': contact.potentialCity,
        'priceRange': contact.priceRange,
        'squareFootage': contact.squareFootage,
        'appointmentTime': contact.appointmentTime
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