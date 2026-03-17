import mongoose from "mongoose"

const launcherSchema = new mongoose.Schema({
    city:{
        type:String,
        required:[true,"city is required"],
    },
    rocketType:{
        type:String,
        enum:['Shahab3', 'Fetah110', 'Radwan', 'Kheibar'],
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

    },
    destroyed:{
        type:Boolean,
        default:false
    }

})

const Launcher = mongoose.model('Launcher',launcherSchema)
export default Launcher

