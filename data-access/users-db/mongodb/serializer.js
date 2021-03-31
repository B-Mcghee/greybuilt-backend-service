const _serializeSingle = (user) => {
    return {
        'id': user._id,
        'name':user.name,
        'email':user.email,
        'role':user.role
    };
};

const serializer = (data) => {
    if(!data){
        return null
    }
    if(Array.isArray(data)){
        return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
}

module.exports = serializer;