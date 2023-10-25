const BusModule = require('./module/busModule')
const mongoDB = require('./mongoDB')


exports.createData = async(req,res) => {
let connection ;

const AmenitiesDataed = req.body.Amenities.map( (AmenitiesData) =>{
 return  AmenitiesData         // i am not define a structure of amenities in here. i directly pass the AmenitiesData which is i set the name for data in map params. because in post-man i defined the structure as it is in the busModel Amenities data
})
console.log(AmenitiesDataed,"AmenitiesDataed")

     try {
        await mongoDB.connect()
        
        const result = await BusModule.insertMany({
            busName : req.body.busName,
            busType : req.body.busType,
            class: req.body.class,
            price: req.body.price,
            duration: req.body.duration,
            rating: req.body.rating,
            Amenities: AmenitiesDataed,
            layout : req.body.layout,
            numberOfSeats : req.body.numberOfSeats,
            numberOfBerth : req.body.numberOfBerth,
            startTime : req.body.startTime,
            endTime : req.body.endTime,
            seatCount : req.body.seatCount,
        }) 
       res.status(200).json(result)
     } catch (error) {
        res.status(500).json({message : error.message})
           console.log(error)
     } finally {
       connection && await mongoDB.disconnect()
     }

}