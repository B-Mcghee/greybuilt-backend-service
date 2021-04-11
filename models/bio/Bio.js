

let buildBio = function(bioValidator){
    return ({
        position,
        user,
        avatar
    } = {}) =>{
        let {error} = bioValidator({position,user,avatar})
        if(error) throw new Error(error)

        return{
            getPosition: () => position,
            getUser: () => user,
            getAvatar: () => avatar
        }
    }
}


module.exports = buildBio

// module.exports = mongoose.model('Bio', BioSchema);