const mongoose = require('mongoose')


exports.connect = async() => {
    
    const url = "mongodb://localhost:27017/"
    try {
      mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology : true}) 
       console.log('DB connected')
    } catch (error) {

         console.log(error)
    }
}

exports.disconnect = async() => {

try {
 await mongoose.connection.close()
console.log('DB disconnected')

}  catch (error) {
console.log('disconnecting error')
}

}