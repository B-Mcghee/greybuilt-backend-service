const _serializeSingle = (project) => {
    return {
      'id': project.serial,
      'title': project.title,
      'description': project.description,
      'coverImage': project.coverImage,
      'images': project.images,
      'squareFeet': project.squareFeet,
      'beds': project.beds,
      'baths': project.baths,
      
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