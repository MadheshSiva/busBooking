const BusModule = require('./module/busModule')
const {connect, disconnect} = require('./mongoDB')

exports.busCardGetdatas = async(req, res) => {

let connection  = connect()
    try {
        await connect() 
const getDataresult = await BusModule.find()
res.status(200).json(getDataresult)

} catch (error) {
res.status(500).json({message : error.message})
} 


}