import mongoose from "mongoose"

const launcherSchema = new mongoose.Schema({
    city:{
        type:String,
        required:[true,"city is required"],
    },
    rocketType:{
        type:String,
        required:[true,"rocketType is required"]

    },
    latitude:{
        type:Number,
        required:[true,"latitude is required"]

    },
    longitude:{
         type:Number,
        required:[true,"longitude is required"]

    },
    name:{
        type:String,
        required:[true,"name is required"]

    }

})

const Launcher = mongoose.model('Launcher',launcherSchema)
export default Launcher

// id
// city
// rocketType
// latitude - number
// longitude - number
// name
