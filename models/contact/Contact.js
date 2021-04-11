
let buildContact = function(contactValidator){
    return ({

        firstName,
        lastName,
        email,
        phoneNumber,
        potentialCity,
        priceRange,
        squareFootage,
        appointmentTime,
    } = {}) =>{
        let {error} = contactValidator({
            firstName,
            lastName,
            email,
            phoneNumber,
            potentialCity,
            priceRange,
            squareFootage,
            appointmentTime,})
        if(error) throw new Error(error)

        return{
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getEmail: () => email,
            getPhoneNumber: () => phoneNumber,
            getPotentialCity: () => potentialCity,
            getPriceRange: () => priceRange,
            getSquareFootage: () => squareFootage,
            getAppointmentTime: () => appointmentTime
        }
    }
}

module.exports = buildContact