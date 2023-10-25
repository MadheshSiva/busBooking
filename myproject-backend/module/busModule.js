const mongoose = require('mongoose')

const BusModel = mongoose.Schema({
busName : {
    type : String, require: true
},
busType : {
    type : String, require: true
}, 
price : {
    type : Number, require : true
},
duration : {
    type : String, require : true
},
rating : {
    type : String, require : true
},
Amenities :[{
    M_ticketSupported : {
        type : Boolean, require : true
    },
    pillowStatus : {
        type : String, 
    },
    readingLightStatus : {
        type : String, 
    },
    M_ticketStatus : {
        type : String, require : true
    },
    bottleStatus : {
        type : String, 
    },
    chargStatus : {
        type : String
    },
    CCTVStatus : {
        type :String
    },
    trakingBusStatus : {
        type :String
    },
    blanketsStatus : {
        type :String
    },
    USBStatus : {
        type :String
    },
    EMG_contact : {
        type :String, require : true
    }
}],
layout : {
    type : String , require : true
},
numberOfSeats : {
    type : Number , require : true
},
numberOfBerth : {
    type : Number , require : true
},
startTime : {
type : String, require : true
},
endTime : {
    type : String, require : true
},
seatCount : {
    type : Array, require : true
}
},{
    timestamps: true
  })
const BusModule = mongoose.model('busdata', BusModel) 
module.exports = BusModule;