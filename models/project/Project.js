const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let buildProject = function(projectValidator){
    return ({
        title,
        description,
        coverImage,
        images,
        squareFeet,
        beds,
        baths
    } = {}) =>{
        let {error} = projectValidator({title, description, coverImage, images, squareFeet, beds, baths})
        if(error) throw new Error(error)

        return{
            getTitle: () => title,
            getDescription: () => description,
            getCoverImage: () => coverImage,
            getImages: () => images,
            getSquareFeet: () => squareFeet,
            beds: () => beds,
            baths: () => baths
        }
    }
}

module.exports = buildProject